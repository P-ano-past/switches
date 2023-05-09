import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";
import "./Allstyles.css";

function Allstyles(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [switchType, setSwitchType] = useState(false);
  const checkSwitchType = switchType ? "switch" : "checkbox";
  useEffect(() => {
    if (props.boxType && props.shadows && props.borderBox && props.placement) {
      setIsChecked(true);
      props.setAll(true);
    } else {
      setIsChecked(false);
      props.setAll(false);
    }
  }, [props.boxType, props.shadows, props.borderBox, props.placement]);

  useEffect(() => {
    setSwitchType(props.boxType);
  }, [props.boxType]);

  const changeAll = () => {
    props.setAll(!props.all);
    if (props.all) {
      props.setBoxType(false);
      props.setShadows(false);
      props.setBorderBox(false);
      props.setPlacement(false);
    } else {
      props.setBoxType(true);
      props.setShadows(true);
      props.setBorderBox(true);
      props.setPlacement(true);
    }

    if (props.boxType && props.shadows && props.borderBox && props.placement) {
      setIsChecked(true);
      props.setAll(true);
    } else {
      setIsChecked(false);
      props.setAll(false);
    }

    if (
      !props.boxType ||
      !props.shadows ||
      !props.borderBox ||
      !props.placement
    ) {
      setIsChecked(false);
    } else if (
      props.boxType &&
      props.shadows &&
      props.borderBox &&
      props.placement
    ) {
      setIsChecked(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="allC">
          <FormCheck
            type={checkSwitchType}
            onChange={() => changeAll()}
            checked={isChecked}
          />
          <p
            onClick={() => {
              console.log(`props: `, props);
            }}
          >
            All Styles:
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Allstyles;
