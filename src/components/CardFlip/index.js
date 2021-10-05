// import React from "react";
// import Sound from "react-sound";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import pr from "../../assets/career/pr.jpg";
import Resume from "../../assets/career/Resume.jpg";
import volunteerism from "../../assets/career/volunteerism.jpg";
import HR from "../../assets/career/HR.jpg";
import E from "../../assets/career/E.jpg";
import AHR from "../../assets/career/AHR.jpg";
// import Resume from ".Resume"

// const frontStyles ={
//     backgroundColor: "black",
//     height: 400,
//     width: 400,
//     color: "goldenrod",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//  const backStyles={
//    ...frontStyles,
//     backgroundColor: "goldenrod",
//     color: "black",
//  }; 
//  const frontH3Styles={
//     color: "goldenrod",
//     display: "flex",
//     justifyContent: "center",
//     textAlign: "center",
//     text: "font-weight-italic",
//  }

const CardFlip = ({cards}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    console.log(cards)
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          backgroundColor: "black",
          height: 400,
          width: 400,
          color: "goldenrod",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:25,
          hoverShadow: "strong",
        }}
      >
          <div className="card-body">
            {/* Back of Card information starts here! */}
        <h3
          className="justify-content-center"
          style={{
            color: "goldenrod",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            text: "font-weight-italic",
            // fontSize: "8px",
          }}
        >
       {cards.title}
        </h3>
        <img
          className="location-front-image justify-content-center py-5"
          src={E}
          width="275"
          height="275"
          // text={props.text}
          alt="healthcare Recruiter"
        />
        <button className="front-flip-button" onClick={handleClick}>
          Click to Learn More
        </button>
        </div> 
      </div>



      
      <div
        style={{
          backgroundColor: "goldenrod",
          height: 800,
          width: 800,
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        {/* detail on back of card */}
        <div className="card-body">
          {/* <Sound url={music} 
         playStatus={isFlipped ? Sound.status.PLAYING : Sound.status.STOPPED}/>   */}

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
            {cards.subtitle}
          </h3>
          {/* <h5 className="justify-content-center"
          style={{
            color: "red",
            display:"flex",
            justifyContent:"center",
            text: "font-weight-light",
          }}
          > */}
          {/* {props.title}</h5> */}
          <h4 
            className="justify-content-center"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              text: "font-weight-italic",
              fontSize: "16px",
            }}className="font-weight-light">{cards.text}</h4>
         <p 
           className="justify-content-center"
           style={{
             color: "#914875",
             display: "flex",
             justifyContent: "left",
             textAlign: "left",
             text: "font-weight-italic",
             fontSize: "16px",
           }}className="font-weight-light white-text">{cards.description}</p>
          {/* <a href="./Resume/index.js">
          <img
            className="location-back-image justify-content-center py-5"
            src={pr}
            width="275"
            height="275"
            text="Resume"
            alt="healthcare Recruiter"
          /></a> */}
          <button className="back-flip-button" onClick={handleClick}>
            Return
          </button>
        </div>
      </div>
      
    </ReactCardFlip>
  );
};

export default CardFlip;
