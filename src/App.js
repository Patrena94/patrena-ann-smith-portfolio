import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer/index.js";
// import Resume from "./pages/Resume";
import ProfessionalSummary from "./pages/ProfessionalSummary";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import logo from "./assets/logo/PADSlogo(white).png";
import Contact from "./pages/Contact"
import "./App.css";
import{ColorPicker, useColor} from "react-color-palette";
import"react-color-palette/lib/css/styles.css";

// export const App = () => {
//   const [color, setColor] = useColor("hex", "#121212");

//   return <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />;
// };

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
                <Link className="nav-link" to="/">
                  Professional Summary
                </Link>
                {/* <Link className="nav-link" to="/resume">
                  Resume 
                </Link> */}
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
           {/* <Route
            path="/resume"
            exact
            render={() => <resume title={this.state.resume.title} />} */}
          {/* />  */}
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
