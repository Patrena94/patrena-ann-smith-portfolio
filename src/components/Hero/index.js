import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import coverImage from "../../assets/hero/hero-image.jpg";
import "../../index.css";

function Hero(props) {
  return (
    <Jumbotron className="jumbotron-fluid p-0">
      <Container fluid={true}>
        <img
          src={coverImage}
          className="my-2"
          style={{
            width: "100%",
          }}
          alt="cover"
        />
        <div class="img-overlay">
          {props.title && (
            <h1 className="display-1 font-weight-bolder bolder">{props.title}</h1>
          )}
          {props.subTitle && (
            <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
          )}
          {props.subscript && (
            <h4 className="text font-weight-light">{props.subscript}</h4>
          )}
        </div>
      </Container>
    </Jumbotron>
  );
}
export default Hero;
