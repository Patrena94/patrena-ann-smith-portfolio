import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Carousels from "react-bootstrap/Carousels"
import Footer from "./components/Footer/index.js";
import Portfolio from "./pages/Portfolio";
import ProfessionalSummary from "./pages/ProfessionalSummary";
import ProfessionalExperience from "./pages/ProfessionalExperience";
// import ContactForm from "./components/Contact/index.js";
// import ContactPage from "./pages/Contact.js";
import logo from "./assets/logo/PADSlogo.png";
import Contact from "./pages/Contact"
import "./App.css";
// import { Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Patrena Ann Smith",
      headerLinks: [
        { title: "Portfolio", path: "/" },
        { title: "Professional Summary", path: "/professionalSummary" },
        { title: "Professional Experience", path: "/professionalExperience" },
        { title: "Contact", paht: "/contact" },
      ],
      professionalSummary: {
        title: "Jacqueline of all Trades",
        subTitle: "Ventures into Web development",
        subscript: "explorer my ventures below!",
      },
      portfolio: {
        title: "Projects",
      },
      professionalExperience: {
        title: "Resume",
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
          <Navbar className="border-bottom" bg="dark" Variant="dark" expand="lg">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            {/* <Navbar.Brand>Patrena Ann Smith</Navbar.Brand> */}
            <Navbar.Toggle className="border=0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Professional Summary
                </Link>
                <Link className="nav-link" to="/professionalSummary">
                  Portfolio
                </Link>
                <Link className="nav-link" to="/professionalExperience">
                  Professional Experience
                </Link>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
                {/* <ContactForm></ContactForm> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <ProfessionalSummary
                title={this.state.professionalSummary.title}
                subTitle={this.state.professionalSummary.subTitle}
                subscript={this.state.professionalSummary.subscript}
              />
            )}
          />
          <Route
            path="/portfolio"
            exact
            render={() => <Portfolio title={this.state.portfolio.title} />}
          />
          <Route
            path="/professionalExperience"
            exact
            render={() => (
              <ProfessionalExperience
                title={this.state.professionalExperience.title}
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
