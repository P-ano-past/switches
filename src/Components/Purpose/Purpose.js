import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Purpose.css";

function Purpose(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [checkMenu, setCheckMenu] = useState(false);
  const [switchType, setSwitchType] = useState(false);
  const [num4, setNum4] = useState(false);
  const [showShade, setShowShade] = useState(false);
  const [showFlex, setShowFlex] = useState(false);
  const [showBorderBox, setShowBorderBox] = useState(false);
  const checkSwitchType = switchType ? "switch" : "checkbox";
  const shade = showShade ? "staticCont" : "";
  const flex = showFlex ? "staticFlex flexR" : "";
  const flexR = showFlex ? "flexR" : "";
  const changedBorder = showBorderBox ? "borderBubble" : "";
  const heading = showBorderBox ? "headingFonts" : "";
  const dark = props.darkMode ? "darkStatic" : "";

  useEffect(() => {
    setShowBorderBox(props.borderBox);
    setShowFlex(props.placement);
    setShowShade(props.shadows);
    setSwitchType(props.boxType);
  }, [props.borderBox, props.placement, props.shadows, props.boxType]);

  return (
    <Container className={`${shade} ${dark}`}>
      <Container>
        <Row className="goalTitle">
          <Col
            className="goalTitle"
            onClick={() => {
              console.log(`props: `, props);
            }}
          >
            <h1 className="goalTitle">
              <p className="goalTitle">Goal</p>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="goalTitle">
          <Col className="goalTitle">
            <p>
              The purpose of this exercise is to demonstrate state handling
              between static generated, and dynamically generated check boxes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Col>
              <h4 className="goalTitle"> Static</h4>
            </Col>
            <Col>
              <p>
                Static generated components are created with hard-coded data and
                are typically used for displaying information that doesn't
                change frequently, such as text or images. These components are
                created once and their content remains the same throughout the
                lifetime of the application. Static components are easy to
                create and they are very performant, as they don't require
                additional processing to generate or update content.
              </p>
            </Col>
          </Col>
          <Col lg={6}>
            <Col>
              <h4 className="goalTitle">Dynamic</h4>
            </Col>
            <Col>
              <p>
                With dynamically generated components, managing state can be
                more complicated, as the content is dynamic and can change
                frequently. It's important to ensure that state is managed
                correctly to prevent performance issues and unexpected behavior.
                One common challenge with dynamically generated components is
                keeping track of state changes and ensuring that the correct
                data is being displayed to the user.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Purpose;
