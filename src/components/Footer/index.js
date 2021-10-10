import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";


function Footer() {
  return (
    <footer className="mt-5">
      <Container className="p=0" fluid={true}>
        <Row className="border-top justify-content-betweenp-3">
          <Col className="p-0" md={3} sm={12}>
          Patrena A.D.Smith 
          </Col>
          <Col className="p-0" md={3} sm={12}>
          33 Atwood Lane, East Hartford, Connecticut 06108 
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
          &copy; 2021 Patrena A. D. Smith, LLC.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
