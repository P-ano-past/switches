import React, { useState, useEffect } from "react";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import "./DarkMode.css";

function DarkMode(props) {
  const [switchType, setSwitchType] = useState();
  const checkSwitchType = switchType ? "switch" : "checkbox";
  const darkType = props.props.darkMode ? "darkSwitch" : "lightSwitch";

  useEffect(() => {
    setSwitchType(props.props.boxType);
  }, [props.props.boxType]);
  console.log(`props.props: `, props.props);
  return (
    <Container>
      <Row>
        <Col className="allC">
          <FormCheck
            type={checkSwitchType}
            id="customDarkSwitch"
            label="Dark mode"
            className={darkType}
            checked={props.props.darkMode}
            onChange={() => props.props.setDarkMode(!props.props.darkMode)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DarkMode;
