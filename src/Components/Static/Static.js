import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Static.css";

function Static(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [checkMenu, setCheckMenu] = useState(false);
  const [switchType, setSwitchType] = useState();
  const [num4, setNum4] = useState(false);
  const [showShade, setShowShade] = useState(false);
  const [showFlex, setShowFlex] = useState(false);
  const shade = showShade ? "" : "staticCont";
  const flex = showFlex ? "staticFlex" : "";

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNum4 = () => {
    setNum4(!num4);
  };

  const handleMenu = () => {
    setCheckMenu(!checkMenu);
  };

  const checkSwitch = () => {
    if (props.boxType) {
      setSwitchType("checkbox");
      props.setBoxType(false);
    } else {
      setSwitchType("switch");
      props.setBoxType(true);
    }
  };

  const checkShadows = () => {
    props.setShadows(!props.shadows);
    setShowShade(!showShade);
  };

  const checkFlex = () => {
    props.setPlacement(!props.placement);
    setShowFlex(!showFlex);
  };

  return (
    <Container className={shade}>
      <Row>
        <Col
          onClick={() => {
            console.log(`props: `, props);
          }}
        >
          <h1>
            <p>Static</p>
          </h1>
        </Col>
      </Row>
      <Row>
        <Row>
          <ul>
            <li className={flex}>
              <Row>
                <Col className={flex}>
                  <p>#1</p>

                  <Col>
                    <Form.Check
                      type={switchType}
                      onChange={handleMenu}
                      label="This checkbox opens a menu for further interaction."
                      checked={checkMenu}
                    />
                  </Col>
                  {checkMenu ? (
                    <Container>
                      <Row>
                        <Col sm={3}>
                          <Form.Check
                            type={switchType}
                            onChange={checkSwitch}
                            label="Switch type"
                            checked={props.boxType}
                          />
                        </Col>
                        <Col sm={3}>
                          <Form.Check
                            type={switchType}
                            onChange={checkShadows}
                            label="Shadows"
                            checked={props.shadows}
                          />
                        </Col>
                        <Col sm={3}>
                          <Form.Check
                            type={switchType}
                            onChange={checkFlex}
                            label="Flex"
                            checked={props.placement}
                          />
                        </Col>
                      </Row>
                    </Container>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </li>
            <li className={flex}>
              <Row>
                <Col>
                  <h3>
                    <p>#2</p>
                  </h3>

                  <Form.Check
                    type={switchType}
                    label="This checkbox does nothing. There are no state handling functions
              tied to this but it still functions as a check box."
                  />
                </Col>
              </Row>
            </li>
            <li className={flex}>
              <Row className={flex}>
                <Col className={flex}>
                  <h3>
                    <p>#3</p>
                  </h3>

                  <p>
                    This checkbox has state handling that links it to this
                    checkbox and number 4 because of its shared state value.
                  </p>
                  <Form.Check
                    value="Linked to check box 3"
                    name="Checkbox #2"
                    checked={isChecked}
                    type={switchType}
                    onChange={handleOnChange}
                  />
                </Col>
              </Row>
            </li>
            <li className={flex}>
              <Row className={flex}>
                <Col className={flex}>
                  <h3>
                    <p>#4</p>
                  </h3>

                  <p>
                    This checkbox has state handling that links it to this
                    checkbox and number 3 because of its shared state value.
                  </p>
                  <Form.Check
                    checked={isChecked}
                    type={switchType}
                    onChange={handleOnChange}
                  />
                </Col>
              </Row>
            </li>
            <li className={flex}>
              <Row className={flex}>
                <Col className={flex}>
                  <h3>
                    <p>#5</p>
                  </h3>

                  <p>This checkbox renders more information.</p>

                  <Form.Check
                    checked={num4}
                    type={switchType}
                    onChange={handleNum4}
                  />
                </Col>
              </Row>
            </li>
          </ul>
        </Row>
      </Row>
      <Row>
        {num4 ? (
          <Col>
            <p>
              This information is being rendered by its own hard coded state
              handling functions. The ternary operator relies on the state
              handling written for checkbox 5 for this to be rendered.
            </p>
          </Col>
        ) : (
          <Col>
            <p>
              To see more information here, please enable checkbox number 5.
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Static;
