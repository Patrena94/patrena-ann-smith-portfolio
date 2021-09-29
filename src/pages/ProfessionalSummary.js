import react from "react";
import Hero from"../components/Hero/index.js";

function ProfessionalSummary(props) {
  return (
 <Hero title={props.title} subTitle={props.subTitle} subscript={props.subscript}/>

  );
}
export default ProfessionalSummary;