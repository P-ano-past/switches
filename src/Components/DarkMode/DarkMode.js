import React, { useState, useEffect } from "react";

import { Container, Row, Col, FormCheck } from "react-bootstrap";

function DarkMode(props) {
  const [switchType, setSwitchType] = useState();
  const checkSwitchType = switchType ? "switch" : "checkbox";

  useEffect(() => {
    setSwitchType(props.props.boxType);
  }, [props.props.boxType]);

  return (
    <Container>
      <Row>
        <Col className="allC">
          <FormCheck
            type={checkSwitchType}
            id="custom-switch"
            label="Dark mode"
            checked={props.props.darkMode}
            onChange={() => props.props.setDarkMode(!props.props.darkMode)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DarkMode;
