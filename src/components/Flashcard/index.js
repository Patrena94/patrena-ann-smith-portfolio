import React,{ useState } from 'react'
import pr from "../../assets/career/pr.jpg";
import Resume from "../../assets/career/Resume.jpg";
import volunteerism from "../../assets/career/volunteerism.jpg";
import HR from "../../assets/career/HR.jpg";
import E from "../../assets/career/E.jpg";
import AHR from "../../assets/career/AHR.jpg";


export default function Flashcard({flashcard}) {
    const[flip, setFlip]=useState(false)
    return (
        <div 
    className={`card ${flip ? 'flip' :''}`}
        onClick={()=> setFlip(!flip)}
        >
    <div className ="front"
      style={{
        backgroundColor: "black",
        height: 600,
        width: 600,
        color: "goldenrod",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3
          className="justify-content-center"
          style={{
            color: "goldenrod",
            display: "flex",
            justifyContent: "center",
            textAlign: "Top",
            text: "font-weight-italic",
          }}
        >
        {flashcard.title}
        </h3>
        <img
          className="location-front-image justify-content-center py-5"
          src={E}
          width="400"
          height="400"
          alt="healthcare Recruiter"
        />
        {/* <button className="front-flip-button" onClick={handleClick}>
          Learn More
        </button> */}
           </div>

           <div className="back"style={{
          backgroundColor: "goldenrod",
          height: 600,
          width: 600,
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginBottom: 20,
        }}>
          <h3
            className="justify-content-center"
            style={{
              color: "#914875",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              text: "font-weight-italic",
              fontSize: "24px",
            }}
          >
              {flashcard.subtitle}
              </h3>
              <h4 
            className="justify-content-center"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              text: "font-weight-italic",
              fontSize: "16px",
            }}className="font-weight-light">{flashcard.text}</h4>
               <p 
           className="justify-content-center"
           style={{
             color: "#914875",
             display: "flex",
             justifyContent: "left",
             textAlign: "left",
             text: "font-weight-italic",
             fontSize: "16px",
           }}className="font-weight-light white-text">{flashcard.description}</p>
           </div>
           </div>
    )
}
