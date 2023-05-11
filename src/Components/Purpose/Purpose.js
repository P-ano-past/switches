import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Purpose.css";

function Purpose(props) {
  const [showBorderBox, setShowBorderBox] = useState(false);
  const [showShade, setShowShade] = useState(false);
  const heading = showBorderBox ? "headingFonts" : "";
  const pTagText = showBorderBox ? "pText" : "";
  const shade = showShade ? "staticCont" : "";
  const dark = props.darkMode ? "darkDynamic" : "lightDynamic";

  useEffect(() => {
    setShowBorderBox(props.borderBox);
    setShowShade(props.shadows);
  }, [props.borderBox, props.shadows]);

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
            {/* <h1 className="headingFonts"> */}
            <h1 className={`${heading} goalTitle`}>
              <p>Goal</p>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="goalTitle">
          <Col className="goalTitle">
            <p className={pTagText}>
              The purpose of this exercise is to demonstrate state handling
              between static generated, and dynamically generated check boxes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Col>
              <h4 className={`${heading} goalTitle`}> Static</h4>
            </Col>
            <Col className="textContent">
              <p className={pTagText}>
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
              <h4 className={`${heading} goalTitle`}>Dynamic</h4>
            </Col>
            <Col className="textContent">
              <p className={pTagText}>
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
