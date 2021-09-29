import React from "react";
// import Box from "react-bootstrap/Box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";
// import socialmedia from "../../assets/socialmedia/145807.png";
// import socialmedia from "../../assets/socialmedia/facebook_1312139.html;
// import socialmedia from "../../assets/socialmedia/2111819.png";
// import FooterLink from "react";
// import Heading from "react";

function Footer() {
  return (
    <footer className="mt-5">
      <Container className="p=0" fluid={true}>
        <Row className="border-top justify-content-betweenp-3">
          <Col className="p-0" md={3} sm={12}>
          ❤️ Made with Love by Patrena A.D.Smith.
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
