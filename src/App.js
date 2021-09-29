import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousels from "react-bootstrap/Carousels"
import Footer from "./components/Footer/index.js";
import Portfolio from "./pages/Portfolio";
import ProfessionalSummary from "./pages/ProfessionalSummary";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import ContactForm from "./pages/Contact";
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
      portfolio: {
        title: "Jacqueline of all Trades",
        subTitle: "Ventures into Web development",
        subscript: "explorer my ventures below!",
      },
      professionalSummary: {
        title: "Summary",
      },
      professionalExperience: {
        title: "Resume",
      },
      contact: {
        title: "Build the Universe Together",
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Patrena Ann Smith</Navbar.Brand>
            <Navbar.Toggle className="border=0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Portfolio
                </Link>
                <Link className="nav-link" to="/professionalSummary">
                  Professional Summary
                </Link>
                <Link className="nav-link" to="/professionalExperience">
                  Professional Experience
                </Link>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={()=><Portfolio title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} subscript={this.state.portfolio.subscript}/>}/>  
          <Route path="/professionalSummary" exact render={()=><ProfessionalSummary title={this.state.professionalSummary.title}/>}/> 
          <Route path="/professionalExperience" exact render={()=><ProfessionalExperience title={this.state.professionalExperience.title}/>}/>
          <Route path="/contact" exact render={()=><Contact title={this.state.contact.title}/>}/>
          <Footer>
        </Footer>
        </Container>      
      </Router>
    );
  }
}
export default App;
