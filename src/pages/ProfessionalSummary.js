import react from "react";
// import { Carousel } from "react-bootstrap";
import Hero from "../components/Hero/index.js";
import BootstrapCarouselComponent from '../components/Carousel/index.js';

function ProfessionalSummary(props) {
  return (
      <div>
 <Hero title={props.title} subTitle={props.subTitle} subscript={props.subscript}/>
 <BootstrapCarouselComponent></BootstrapCarouselComponent>
</div>
  );
}
export default ProfessionalSummary;