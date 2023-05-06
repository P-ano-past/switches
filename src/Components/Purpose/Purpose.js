import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Purpose() {
  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <h1>
              <p>Goal</p>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>
              The purpose of this excercise is to demonstrate state handling
              between static generated, and dynamically generated check boxes.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Purpose;
