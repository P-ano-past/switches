import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";
import "./Dynamic.css";

function Dynamic(props) {
  const [showBorderBox, setShowBorderBox] = useState(false);
  const [formText, setFormText] = useState({ item: "" });
  const [formArray, setFormArray] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [showFlex, setShowFlex] = useState(false);
  const [showShade, setShowShade] = useState(false);
  const [switchType, setSwitchType] = useState();
  const heading = showBorderBox ? "headingFonts" : "";
  const shade = showShade ? "staticCont" : "";
  const flex = showFlex ? "staticFlex flexR" : "";
  const flexR = showFlex ? "flexR" : "";
  const changedBorder = showBorderBox ? "borderBubble" : "";
  const checkSwitchType = switchType ? "switch" : "checkbox";
  const dark = props.darkMode ? "darkDynamic" : "lightDynamic";

  useEffect(() => {
    setShowBorderBox(props.borderBox);
    setShowFlex(props.placement);
    setShowShade(props.shadows);
    setSwitchType(props.boxType);
  }, [props.borderBox, props.placement, props.shadows, props.boxType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {};

    for (let [key, value] of formData.entries()) {
      newItem[key] = value;
    }
    newItem.isActive = false;
    setFormArray([...formArray, newItem]);

    setFormText({ item: "" });

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
  };

  return (
    <Container className={`${shade} `}>
      <Row className={flexR}>
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
            <Form.Label htmlFor="item">Add item:</Form.Label>
            <Form.Group className="mb-3 inputForm">
              <Form.Control
                id="item"
                type="text"
                value={formText.item}
                onChange={(e) =>
                  setFormText({ ...formText, item: e.target.value })
                }
                name="item"
                placeholder="Add item"
              />
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className={`${dark}`}>
          <ul>
            {formArray.map((item, index) => {
              return (
                <li key={index} className="chbt">
                  <FormCheck
                    className="listCh"
                    type={checkSwitchType}
                    onChange={() => handleCheck(index)}
                    checked={item.isActive}
                    xs={3}
                  />
                  <Col className="itemCont">
                    {index + 1}.&nbsp;{item.item}
                  </Col>

                  {item.isActive ? (
                    <Button
                      variant="danger"
                      onClick={() =>
                        setFormArray(formArray.filter((_, i) => i !== index))
                      }
                    >
                      Delete
                    </Button>
                  ) : null}
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
