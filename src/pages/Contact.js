import React from "react";
import Form from "react-bootstrap/Form";
import Content from "../components/content";
import Button from "react-bootstrap/Button";
// import Hero from "../components/Hero";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      subject: " ",
      message: " ",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    // can use the statement immediately below to add a check book to follow upon submitting artiles, etc.
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit =(event) =>{
      event.preventDefault();
      this.setState({
          disabled: true,
      });
  }

  render() {
    return (
      <div>
        {/* <Hero title={this.props.title}/> */}
        <Content>
          <form>
            <Form.Group>
              <Form.Label htmlFor="full-name"> Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email"> Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="subject"> Subject</Form.Label>
              <Form.Control
                id="subject"
                name="subject"
                type="text"
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message"> Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="8"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="d-inlin-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </form>
        </Content>
      </div>
    );
  }
}
export default ContactPage;
