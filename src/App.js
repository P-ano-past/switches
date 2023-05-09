import "./App.css";
import { Container, Row, Col, Tab, Nav, FormCheck } from "react-bootstrap";
import Static from "./Components/Static/Static";
import Dynamic from "./Components/Dynamic/Dynamic";
import Purpose from "./Components/Purpose/Purpose";
import { useState } from "react";
import Allstyles from "./Components/Allstyles/Allstyles";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [boxType, setBoxType] = useState(false);
  const [shadows, setShadows] = useState(false);
  const [borderBox, setBorderBox] = useState(false);
  const [placement, setPlacement] = useState(false);
  const [all, setAll] = useState(false);

  return (
    <div className="App">
      <Container className={darkMode ? "dark" : "light"} fluid>
        <Row>
          <Col>
            <h1>
              <p>Dynamically generated vs static: </p>
            </h1>
          </Col>
        </Row>
        <Row className="mains">
          <Allstyles
            boxType={boxType}
            setBoxType={setBoxType}
            shadows={shadows}
            setShadows={setShadows}
            setPlacement={setPlacement}
            placement={placement}
            setBorderBox={setBorderBox}
            borderBox={borderBox}
            setAll={setAll}
            all={all}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
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
                      setBorderBox={setBorderBox}
                      borderBox={borderBox}
                      setDarkMode={setDarkMode}
                      darkMode={darkMode}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Dynamic">
                    <Dynamic
                      boxType={boxType}
                      setBoxType={setBoxType}
                      shadows={shadows}
                      setShadows={setShadows}
                      setPlacement={setPlacement}
                      placement={placement}
                      setBorderBox={setBorderBox}
                      borderBox={borderBox}
                      setDarkMode={setDarkMode}
                      darkMode={darkMode}
                    />
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
