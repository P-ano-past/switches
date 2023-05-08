import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";

function Dynamic(props) {
  const [showBorderBox, setShowBorderBox] = useState(false);
  const [formText, setFormText] = useState([]);
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

    setFormArray([...formArray, newItem]);

    e.target.reset();
  };

  const handleCheck = () => {
    for (let i = 0; i < formArray.length; i++) {
      for (let j = 0; i < checkArray.length; j++) {
        formArray[i].isActive = true;
      }
    }
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
                onChange={(e) => setFormText({ item: e.target.value })}
                name="item"
                placeholder="Add item"
                required
              />
              <Button
                type="submit"
                onClick={console.log(`checkArray: `, checkArray)}
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
              handleCheck();
              return (
                <li key={index}>
                  <Col>
                    {index + 1}.&nbsp;{item.item}
                  </Col>
                  <FormCheck onChange={() => console.log(`thisi: `, this)} />
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
