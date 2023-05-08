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
  const [showBorderBox, setShowBorderBox] = useState(false);
  const shade = showShade ? "staticCont" : "";
  const flex = showFlex ? "staticFlex flexR" : "";
  const flexR = showFlex ? "flexR" : "";
  const changedBorder = showBorderBox ? "borderBubble" : "";
  const heading = showBorderBox ? "headingFonts" : "";

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

  const checkBB = () => {
    props.setBorderBox(!props.borderBox);
    setShowBorderBox(!showBorderBox);
  };

  return (
    <Container className={shade}>
      <Row>
        <Col
          onClick={() => {
            console.log(`props: `, props);
          }}
        >
          <h1 className={heading}>
            <p>Static</p>
          </h1>
        </Col>
      </Row>
      <Row>
        <Row>
          <ul>
            <li className={changedBorder}>
              <Row>
                <Col>
                  <Row>
                    <Col className={flexR}>
                      <h3 className={heading}>
                        <p>1.</p>
                      </h3>

                      <p>This checkbox opens a menu for further interaction.</p>
                      <Form.Check
                        type={switchType}
                        onChange={handleMenu}
                        checked={checkMenu}
                      />
                    </Col>
                  </Row>

                  {checkMenu ? (
                    <Container>
                      <Row>
                        <Col sm={3} className={flex}>
                          <Col className={flexR}>
                            <p className="text">Switch type:</p>

                            <Form.Check
                              type={switchType}
                              onChange={checkSwitch}
                              checked={props.boxType}
                            />
                          </Col>
                        </Col>
                        <Col sm={3} className={flex}>
                          <Col className={flexR}>
                            <p>Shadows</p>
                            <Form.Check
                              type={switchType}
                              onChange={checkShadows}
                              checked={props.shadows}
                            />
                          </Col>
                        </Col>
                        <Col sm={3} className={flex}>
                          <Col className={flexR}>
                            <p>Flex</p>
                            <Form.Check
                              type={switchType}
                              onChange={checkFlex}
                              checked={props.placement}
                            />
                          </Col>
                        </Col>
                        <Col sm={3} className={flex}>
                          <Col className={flexR}>
                            <p>Styles</p>
                            <Form.Check
                              type={switchType}
                              onChange={checkBB}
                              checked={props.borderBox}
                            />
                          </Col>
                        </Col>
                      </Row>
                    </Container>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </li>
            <li className={changedBorder}>
              <Row>
                <Col className={flexR}>
                  <h3 className={heading}>
                    <p>2.</p>
                  </h3>
                  <p>
                    This checkbox does nothing. There are no state handling
                    functions tied to this but it still functions as a check
                    box.
                  </p>
                  <Form.Check type={switchType} />
                </Col>
              </Row>
            </li>
            <li className={changedBorder}>
              <Row>
                <Col className={flexR}>
                  <h3 className={heading}>
                    <p>3.</p>
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
            <li className={changedBorder}>
              <Row>
                <Col className={flexR}>
                  <h4 className={heading}>
                    <p>4.</p>
                  </h4>
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
            <li className={changedBorder}>
              <Row>
                <Col className={flexR}>
                  <h3 className={heading}>
                    <p>5.</p>
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
              handling functions. The ternary operator that renders this text
              relies on the state handling written for checkbox 5 for this to be
              rendered.
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
