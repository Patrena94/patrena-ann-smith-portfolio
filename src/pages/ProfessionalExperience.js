import react from "react";
import Hero from "../components/Hero/index.js";
import Content from "../components/Content";
import React, {useState} from 'react';
// import ReactDom from 'react-dom'
// import ReactCardFlip from "react-card-flip";
import ReactCardFlip from"../components/CardFlip";
import CardFlip from "../components/CardFlip";
import Resume from "./../assets/career/Resume.jpg";
import volunteerism from "./../assets/career/volunteerism.jpg";
import HR from "./../assets/career/HR.jpg";
import E from "./../assets/career/E.jpg";
import AHR from "./../assets/career/AHR.jpg";




function ProfessionalExperience(props) {
  // const Cards =["Engineering", "Engineering"];
  const Cards =[
  {
    id: 0,
    title:"EDUCATION & TRAINING",
    src: "E",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
    description:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards.", 
  },
  {
    id: 1,
    description:"AREAS OF EXPERTISE",
    src: "HR",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
    input:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards." 
  },
  {
    id: 2,
    description:"RESUME",
    src: "Resume",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
    input:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards." 
  },
  {
    id: 3,
    description:"COVER LETTER",
    src: "AHR",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
    primaryResponsibility:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards." 
  },  
  {
    id: 4,
    description:"VOLUNTEERISM",
    src: "volunteerism",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
    primaryResponsibility:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards." 
  }  
]
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Talented Public Relations Marketing Specialist who has proven
          excellence in all aspects of operations. Expert in establishing goals,
          implementing effective work processes, building client relationships
          to drive growth, and delivering quality customer service. Displayed
          strategic insight and ambition when executing complex initiatives
          serving company objectives. Metrics generator who can institute new
          standards of excellence through measurable accolades. Talented coach
          who can teach others to exceed expectations consistently.{" "}
        </p> 
      </Content>  
  {Cards.map((card)=>( 
    <CardFlip title={card.description} text={card.text} />
    // <img
    // src={require(``)}
  ))}    
      {/* <ReactCardFlip /> */}
    </div> 
  );
  }
export default ProfessionalExperience;
