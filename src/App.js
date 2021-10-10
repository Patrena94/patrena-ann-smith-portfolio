import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer/index.js";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import logo from "./assets/logo/PADSlogo(white).png";
import Contact from "./pages/Contact"
import About from "./pages/About";
import "./App.css";
import"react-color-palette/lib/css/styles.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Patrena Ann Smith",
      headerLinks: [
        { title: "About", path: "/" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Resume", path: "/resume" },
        { title: "Contact", paht: "/contact" },
      ],
      portfolio: {
        title: "Jacqueline of all Trades",
        subTitle: "Ventures into Web development",
        subscript: "explorer my ventures below!",
      },
      about: {
        title: "Professional Summary",
      },
      resume: {
        title: "Professional Experience",
      },
      contact: {
        title: "Build the Universe Together",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          {/* <Navbar className="border-bottom" bg="transparent" expand="lg"> */}
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            {/* <Navbar.Brand>Patrena Ann Smith</Navbar.Brand> */}
            <Navbar.Toggle className="border=0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" style={{
            color: "gold",
          }} to="/">
                  About
                </Link>
                <Link className="nav-link" style={{
            color: "gold",
          }} to="/portfolio">
                  Portfolio
                </Link>
                <Link className="nav-link" style={{
            color: "gold",
          }} to="/resume">
                  Resume
                </Link>
                <Link className="nav-link" style={{
            color: "gold",
          }} to="/Contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <About
                title={this.state.about.title} 
              />
            )}
          />
          <Route
            path="/portfolio"
            exact
            render={() => (
              <Portfolio
                title={this.state.portfolio.title}
                subTitle={this.state.portfolio.subTitle}
                subscript={this.state.portfolio.subscript}
              />
            )}
          />
           <Route
            path="/resume"
            exact
            render={() => (
              <Resume
                title={this.state.resume.title}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => <Contact title={this.state.contact.title} />}
          />
         
          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}
export default App;
