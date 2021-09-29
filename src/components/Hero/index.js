import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron className="bg-dark jumbotron-fluid p-0" variant="dark">
      <Container fluid={true}>
        <Row className="justify-contnt-center py-5">
          <Col md={8} sm={12}>
            {props.title && <h1>{props.title}</h1>}
            {props.subTitle && <h3>{props.subTitle}</h3>}
            {props.subscript && <h4>{props.subscript}</h4>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Hero;