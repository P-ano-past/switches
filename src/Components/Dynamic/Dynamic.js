import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";

function Dynamic(props) {
  const [showBorderBox, setShowBorderBox] = useState(false);
  const [formText, setFormText] = useState({ item: "" });
  const [formArray, setFormArray] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const heading = showBorderBox ? "headingFonts" : "";

  useEffect(() => {
    setShowBorderBox(props.borderBox);
  }, [props.borderBox]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {};

    for (let [key, value] of formData.entries()) {
      newItem[key] = value;
    }
    newItem.isActive = false;
    setFormArray([...formArray, newItem]);

    e.target.reset();
  };

  const handleCheck = (index) => {
    const updatedItem = {
      ...formArray[index],
      isActive: !formArray[index].isActive,
    };
    const updatedFormArray = [
      ...formArray.slice(0, index),
      updatedItem,
      ...formArray.slice(index + 1),
    ];
    setFormArray(updatedFormArray);

    if (updatedItem.isActive) {
      setCheckArray([...checkArray, updatedItem]);
    } else {
      const filteredCheckArray = checkArray.filter(
        (item) => item.item !== updatedItem.item
      );
      setCheckArray(filteredCheckArray);
    }
    console.log(`checkArray: `, checkArray);
  };

  return (
    <Container>
      <Row>
        <Col
          onClick={() => {
            console.log(`props: `, props);
          }}
        >
          <h1 className={heading}>
            <p>Dynamic checkbox example:</p>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="item">Add item:</Form.Label>
              <Form.Control
                id="item"
                type="text"
                value={formText.item}
                onChange={(e) =>
                  setFormText({ ...formText, item: e.target.value })
                }
                name="item"
                placeholder="Add item"
                required
              />
              <Button
                type="submit"
                onClick={console.log(`formArray: `, formArray)}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {formArray.map((item, index) => {
              return (
                <li key={index}>
                  <Col>
                    {index + 1}.&nbsp;{item.item}
                  </Col>
                  <FormCheck
                    onChange={() => handleCheck(index)}
                    checked={item.isActive}
                  />
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Dynamic;
