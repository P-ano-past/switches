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
  const [moreInfo, setMoreInfo] = useState(false);
  const heading = showBorderBox ? "headingFonts" : "";
  const shade = showShade ? "staticCont" : "";
  const flexR = showFlex ? "flexR" : "";
  const checkSwitchType = switchType ? "switch" : "checkbox";
  const dark = props.darkMode ? "darkDynamic" : "lightDynamic";
  const darkType = props.darkMode ? "darkSwitch" : "lightSwitch";
  const textTransition = moreInfo ? "textOpen" : "textClose";

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
    <Container className={`${shade} ${dark}`}>
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
        <Row className="moreInfoCont">
          <Col className={`${flexR} moreInfoCont `}>
            <FormCheck
              label={<p>Whats dynamic about this?</p>}
              onClick={() => {
                setMoreInfo(!moreInfo);
              }}
              type={checkSwitchType}
              className={darkType}
            />
          </Col>
          <Col>
            {moreInfo ? (
              <Col className={`moreInfoText ${textTransition}`}>
                When it comes to state handling, dynamic generated checkboxes
                require more attention than static checkboxes. This is because
                their state can change dynamically, which means that the
                JavaScript code responsible for generating them needs to keep
                track of their current state and update it as necessary. This
                can involve adding or removing elements from the DOM, updating
                their properties, and updating any data structures that store
                their state. In this case, the checkbox enables a delete button.
                Both the button and the checkbox are specific to the numerical
                item they are referenced to, yet these items are not hard coded.
                You can interact with this below:
              </Col>
            ) : (
              ""
            )}
          </Col>
        </Row>
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
      <Row className="smol">
        <Col className={``}>
          <ul>
            {formArray.map((item, index) => {
              return (
                <li key={index} className="chbt">
                  <FormCheck
                    className={`listCh ${darkType}`}
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
