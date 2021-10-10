import react from "react";
import Hero from "../components/Hero/index.js";
// import BootstrapCarouselComponent from '../components/Carousel/index.js';
import ContactForm from "../components/Contact/index.js";

function Contact(props) {
  return (
    <div>
      <Hero title={props.title} />
      <ContactForm></ContactForm>
    </div>
  );
}
export default Contact;
