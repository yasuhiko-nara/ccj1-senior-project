import React from "react";
import Mapbox from "../components/Mapbox";
import GoogleMap from "../components/GoogleMap";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <GoogleMap />
        </Col>
        <Col>
          <Mapbox />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
