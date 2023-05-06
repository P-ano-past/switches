import "./App.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Static from "./Components/Static/Static";
import Dynamic from "./Components/Dynamic/Dynamic";
import Purpose from "./Components/Purpose/Purpose";
import { useState } from "react";

function App() {
  const [boxType, setBoxType] = useState(false);
  const [shadows, setShadows] = useState(false);
  const [placement, setPlacement] = useState(false);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>
              <p>Dynamically generated vs static: </p>
            </h1>
          </Col>
        </Row>

        <Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Purpose">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="Purpose">Purpose</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Static">Static</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Dynamic">Dynamic</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Purpose">
                    <Purpose />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Static">
                    <Static
                      boxType={boxType}
                      setBoxType={setBoxType}
                      shadows={shadows}
                      setShadows={setShadows}
                      setPlacement={setPlacement}
                      placement={placement}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Dynamic">
                    <Dynamic />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </Container>
    </div>
  );
}

export default App;
