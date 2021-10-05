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
    subtitle: "University of Connecticut",
    src: "E",
    text:"Bachelor of Arts in Liberal Arts & Sciences: Political Science",
    alt:"Education",
    description:"University of Connecticut School of Engineering: Certificate Program: Full Stack Web Developer", 
  },
  {
    id: 1,
    title:"AREAS OF EXPERTISE",
    subtitle: "Areas of Expertise",
    src: "HR",
    text:"Web Development: HTML, CSS, JavaScript, Express.js, SQL, NoSQL, React, Node.js, API:client Side, Server-Side, Third-Party, Rest and Web",
    alt:"Areas of Expertise",
    description:"Customer Service – Lead Generation – Client Relations – Event Coordination – Strategic Planning Professional Development – Talent Acquisition – Market Analysis – Interviewing – Business Negotiations MS Office – Word Perfect – Lotus Notes – GroupWise – Adapt – iResumix – Copas – CSS HRizon ADP/CSS – AJB.org – Monster – Careerbuilder – PcAnywhere – Temp Trax – JobDirect – HotJobs – QuickBooks – Zoom- Go to Meeting", 
  },
  {
    id: 2,
    title:"AWARDS & RECOGNITIONS",
    subtitle:"Awards & Recognitions",
    src: "AHR",
    text:"2017 Naugatuck Valley Projects MICAH Award Honoree ~ The Naugatuck Valley Project",
    alt:"Healthcare Insurance Industry",
   description:"Certificate of Special Congressional Recognition of the 2017 Naugatuck Valley Project’s MICAH AWARD ~ U.S. House of Representatives Congresswoman Elizabeth H. Esty." 
  },
  {
    id: 3,
    title:"RESUME",
    subtitle:"",
    src: "Resume",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
    description:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards." 
  },
  {
    id: 4,
    title:"COVER LETTER",
    subtitle:"",
    src: "AHR",
    text:"PROCURE STAFF	2006 TO 2009",
    alt:"Healthcare Insurance Industry",
   description:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide.Developed and educated clients  on the process and benefit of the program.Screened resumes to select the most qualified candidates to present to the staffing managers.Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards." 
  },  
  {
    id: 4,
    title:"VOLUNTEERISM",
    subtitle:"WESTERN CONNECTICUT AREA LABOR FEDERATION	2016 TO 2019",
    src: "volunteerism",
    text:"FINANCIAL SECRETARY TREASURER",
    alt:"Healthcare Insurance Industry",
    description:"Oversaw the merger of four central labor council to create the Western Connecticut Area Labor Federation.  Developed the constitution and merger contract for area labor federation; secured a FEIN and State tax ID for the organization; created  an employee contract; secured employee health and retirement benefit; and recruitment and hiring of employee.  My primary responsibility was to provide detailed Financial reports; account payables and receivables, payroll; as well as State Elections Enforcement Commission and 990 fillings. In addition to,  increasing and maintaining member affiliation; managing the political Action Committee account; managing the field engagement coordinator; strategic planning and program building; as well as developing relationship at the National, Regional, and State level across private, public and building trade union sectors. •	Managed the merger of over $300,000 in Assets.•	Secured $270,000 in grant funding from the National AFL CIO for Western Connecticut Area Labor Federation and Eastern Connecticut Area Labor Federation. •	Sponsored Pathway to Power – a seminar to encourage and train union members to run for federal, state, and municipal office.•	Acquired access to a National Field Engagement Coordinator to assist with municipal elections.•	Acquired additional funding from the National AFL~CIO for supplies for the municipal elections.", 
  }, 
  {
    id: 5,
    title:"BOARDS",
    subtitle:"Organizations	2010 TO 2021",
    src: "volunteerism",
    text:"Board Positions",
    alt:"Healthcare Insurance Industry",
    description:"Waterbury Central Labor Council: Treasurer-PAC Fund Administrator  Fairfield County Central Labor Council: Recording Secretary      Hartford Central Labor Council: Vice President    Connecticut AFL-CIO: Vice President  Western Connecticut Area Labor Federation: Recording Secretary Treasurer  Eastern Connecticut Area Labor Federation:  Executive Board Member -Trustee", 
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
    <CardFlip  cards={card} />
    // <img
    // src={require(``)}
  ))}    
      {/* <ReactCardFlip /> */}
    </div> 
  );
  }
export default ProfessionalExperience;
