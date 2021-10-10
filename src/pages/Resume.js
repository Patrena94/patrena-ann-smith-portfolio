import react from "react";
import Hero from "../components/Hero/index.js";
import Content from "../components/Content";
import React, {useState} from 'react';
// import Resume from "./../assets/career/Resume.jpg";
import volunteerism from "./../assets/career/volunteerism.jpg";
import HR from "./../assets/career/HR.jpg";
import E from "./../assets/career/E.jpg";
import AHR from "./../assets/career/AHR.jpg";
import FlashcardList from "../components/FlashcardList";




function Resume(props) {
    const[flashcards, setFlashcards]=useState(Flashcards)
    return (
      <div>
      <Hero title={props.title} />
      <Content>
        <p className="Introduction" style={{color:"#C49E93",fontsize: "24px",fontWeight: "bold",}}>
        The <a href="./../assets/career/Resume.jpg">Professional Experience</a> of the talented Public Relations Specialist is attached for your perusal.{" "}
        </p> 
      </Content>  
      <div className="container">
      <FlashcardList flashcards={flashcards} />
      </div>
      </div>
          );
   
    }
    const Flashcards=[{
    id: 0,
    title:"EDUCATION & TRAINING",
    subtitle: "University of Connecticut",
    image: "./assets/career/E.jpg",
    text:"Bachelor of Arts in Liberal Arts & Sciences: Political Science",
    alt:"Education",
    description:"University of Connecticut School of Engineering: Certificate Program: Full Stack Web Developer", 
  },
  {
    id: 1,
    title:"AREAS OF EXPERTISE",
    subtitle: "Areas of Expertise",
    image: "./assets/career/HR.jpg",
    text:"Web Development: HTML, CSS, JavaScript, Express.js, SQL, NoSQL, React, Node.js, API:client Side, Server-Side, Third-Party, Rest and Web",
    alt:"Areas of Expertise",
    description:"Customer Service – Lead Generation – Client Relations – Event Coordination – Strategic Planning Professional Development – Talent Acquisition – Market Analysis – Interviewing – Business Negotiations MS Office – Word Perfect – Lotus Notes – GroupWise – Adapt – iResumix – Copas – CSS HRizon ADP/CSS – AJB.org – Monster – Careerbuilder – PcAnywhere – Temp Trax – JobDirect – HotJobs – QuickBooks – Zoom- Go to Meeting", 
  },
  {
    id: 2,
    title:"AWARDS & RECOGNITIONS",
    subtitle:"Awards & Recognitions",
    image: "./assets/career/AHR.jpg",
    text:"2017 Naugatuck Valley Projects MICAH Award Honoree ~ The Naugatuck Valley Project",
    alt:"Healthcare Insurance Industry",
   description:"Certificate of Special Congressional Recognition of the 2017 Naugatuck Valley Project’s MICAH AWARD ~ U.S. House of Representatives Congresswoman Elizabeth H. Esty." 
  },
  {
    id: 3,
    title:"LIFE INSURANCE",
    subtitle:"AMERICAN INCOME LIFE INSURANCE COMPANY	2009 TO PRESENT",
    image: "./assets/career/pr.jpg",
    text:"PUBLIC RELATIONS MARKETING SPECIALIST (2009 TO 2013 & 2015 TO PRESENT",
    alt:"Insurance Industry",
    description:"Cultivate leads for the Sales Team while developing and retaining the company’s corporate image and identity. Pinpoint client groups and determine the best way to contract with the group to provide no cost benefits to different members to generate leads for the Sales Team. Interact with executives, managers, and administrators within the following markets credit unions, unions, associations, small business, and schools. Conducted presentations to executives, executive boards, principles, and business owners. Forge and retain relationships with new and existing clients. •	Stimulated an overall 76.09% lead growth and 176.1% original lead growth for the 2020 calendar year. •	Received the following accolades: o	Founder’s Club 2020 o	Top Public Relations Representative Category V 2020 o	Most Original leads Generated 2020 o	Top Rookie in February 2010 o	Top Public Relations Representative Category III in February 2010 o	Top Public Relations Representative Category III in September 2012 PUBLIC RELATIONS MANAGER-NEW ENGLAND (2013 TO 2015)	    Formulated strategic plans for recruiting and hiring new talent to fill vacancies. Managed and inspired the Public Relation Team of five marketing specialists in developing strategic plans for increased lead generation in specific market to obtain growth of 23% for the territory in 2014. Ranked second as Public Relations Manager in February 2014.  Bonus 5 out of 5 Quarters as a Public Relations Manager", 
  },
  {
    id: 4,
    title:"CONSULTING",
    subtitle:"APOLLO PROFESSIONAL SOLUTIONS, INC.	2006",
    image: "./assets/career/R.jpg",
    text:"RECRUITER/SALES",
    alt:"Consulting Industry",
    description:"Worked in tandem with hiring managers and HR departments and executives in recruiting contractors for direct and temporary positions within the automotive, aircraft, and aerospace industry. Prospected, acquired, and serviced current and potential clients for Apollo Professional Solutions by advocating the company as a feasible vendor to provide staffing services. Supported the development of recruiting strategies and talent acquisition.", 
  },
  {
    id: 5,
    title:"BANKING",
    subtitle:"BANK OF AMERICA	2005 TO 2006",
    image: "./assets/career/BK.jpg",
    text:"CLIENT SERVICE CONSULTANT-GLOBAL TREASURY (GOVERNMENT BANKING)",
    alt:"Banking Industry",
   description:"Preserving highly-valued municipality for the bank. Assessed customer request patterns for potential new cash management products. Initiated internal and external transfers, as well as federal wires. Delivered financial calculations on an account for five months of daily interest for RM. Reconciled customer accounts for deposit errors. Aided clients with cash management products." 
  },
  {
    id: 6,
    title:"Manufacturing",
    subtitle:"KONICA MINOLTA BUSINESS SOLUTIONS U.S.A., INC.	2005",
    image: "./assets/career/Resume.jpg",
    text:"MAJOR ACCOUNT BILLING ADMINISTRATOR (GOVT.) | SALES ADMINISTRATOR (UPS)",
    alt:"Manufactoring Industry",
    description:"Created and maintained materials in SAP for billing. Developed orders and 3rd party purchase orders. Expedited products and directed communication with vendors and other departments regarding the shipping, expediting, and delivering ETA information of 3rd party order products. Finalized edit processes on sales order documents.", 
  },
  {
    id: 7,
    title:"ENGINEERING",
    subtitle:"THE NUCON GROUP	2001 TO 2004",
    image: "./assets/career/E.jpg",
    text:"ENGINEERING ASSISTANT/OFFICE COORDINATOR",
    alt:"Engineering Industry",
    description:"Provided Executive Support to the Vice President of Engineering and the Branch Manager. Primary responsibility consisted of operation management in the areas of accounting, marketing, and recruiting. Inclusive of, but not limited to submission of government Forms CL-3 (state and federal REV.6/99 co-17) and extension of contracts; revenue projection, budget, and revenue reports; contract compliance; development of recruiting strategies and recruitment.", 
  },  
  {
    id: 8,
    title:"AEROSPACE",
    subtitle:"THE NUCON GROUP                                       (HAMILTON SUNDSTRAND)	2001 TO 2001",
    image: "./assets/career/AHR.jpg",
    text:"RECRUITING ASSISTANT",
    alt:"Aerospace Industry",
    description:"•	Coordinated the Co-op/Intern Program and recruited professional candidates for the aerospace industry.  Responsibilities consisted of negotiating salary and stipends; interfacing with hiring managers, search firms, headhunters, and executives to prepare a slate of qualified candidates for open job requisitions.", 
  }, 
  {
    id: 9,
    title:"ENGINEERING",
    subtitle:"MANPOWER                                    (UNITED TECHNOLOGIES CORPORATION)	2000 TO 2001",
    image: "./assets/career/R.jpg",
    text:"ENGINEERING ASSISTANT/OFFICE COORDINATOR",
    alt:"Engineering Industry",
    description:"RECRUITING COORDINATOR AND ASSISTANT CO-OP/INTERN STAFFING ASSOCIATE", 
  }, 
  {
    id: 10,
    title:"VOLUNTEERISM",
    subtitle:"WESTERN CONNECTICUT AREA LABOR FEDERATION	2016 TO 2019",
    image: "./assets/career/volunteerism.jpg",
    text:"FINANCIAL SECRETARY TREASURER",
    alt:"Healthcare Insurance Industry",
    description:"Interfaced with engaging managers and vendors to fill administrative and clerical contractor job requisitions within the healthcare industry nationwide. Developed and educated clients  on the process and benefit of the program. Screened resumes to select the most qualified candidates to present to the staffing managers. Secured interviews and complied payroll cost savings reports; expired purchase order and tenure reports; and  processed purchase orders modification such as extensions, expenses, and termination.  Diplomatically negotiated bill rates with vendors to win five monthly negotiation awards.", 
  }, 
  {
    id: 11,
    title:"COMMUNITY",
    subtitle:"THE SALVATION ARMY 	2003 TO 2012",
    image: "./assets/career/volunteerism.jpg",
    text:"YOUTH CORP SARGENT MAJOR",
    alt:"Community Involvement",
    description:"Developed program for the youth in our community and members.  Operated within the North End of Hartford Community as a family Mediator participating in the family Mediation Program in partnership with Connecticut Department of Children and Families and the Capitol Region Conference of Churches.  •	Lead Mediator •	Treasurer •	Choir member", 
  }, 
  {
    id: 12,
    title:"BOARDS",
    subtitle:"Organizations	2010 TO 2021",
    image: "./assets/career/volunteerism.jpg",
    text:"Board Positions",
    alt:"Healthcare Insurance Industry",
    description:"Waterbury Central Labor Council: Treasurer-PAC Fund Administrator  Fairfield County Central Labor Council: Recording Secretary      Hartford Central Labor Council: Vice President    Connecticut AFL-CIO: Vice President  Western Connecticut Area Labor Federation: Recording Secretary Treasurer  Eastern Connecticut Area Labor Federation:  Executive Board Member -Trustee", 
  }  
]
  
export default Resume;
