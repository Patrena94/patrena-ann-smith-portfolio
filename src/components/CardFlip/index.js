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

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    console.log(props)
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
          <div className="location-front-item">
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
       {props.description}
        </h3>
        {/* <p> {props.text}</p> */}
        {/* <p> {props.primaryResponsibility}</p> */}
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
        <div className="location-back-item">
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
              fontSize: "10px",
            }}
          >
            {props.title}
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
          <h4 className="font-weight-light gold-text">{props.text}</h4>
         <p className="font-weight-light white-text">{props.description}</p>
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
