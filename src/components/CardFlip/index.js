// import React from "react";
// import Sound from "react-sound";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import pr from "../../assets/career/pr.jpg";
import Resume from "./../../assets/career/Resume.jpg";
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

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
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
        <h3
          className="justify-content-center"
          style={{
            color: "goldenrod",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            text: "font-weight-italic",
          }}
        >
          Professional Experience
        </h3>
        <img
          className="location-front-image justify-content-center py-5"
          src={pr}
          width="275"
          height="275"
          text="Professional Experience"
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
          height: 400,
          width: 400,
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
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
            }}
          >
            Resume
          </h3>
          <a href="./Resume/index.js">
          <img
            className="location-back-image justify-content-center py-5"
            src={pr}
            width="275"
            height="275"
            text="Resume"
            alt="healthcare Recruiter"
          /></a>
          <button className="back-flip-button" onClick={handleClick}>
            click to View
          </button>
        </div>
      </div>
      
    </ReactCardFlip>
  );
};

// class App extends React.Component {
//     constructor() {
//       super();
//         this.state = {
//         isFlipped: false
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(e) {
//       e.preventDefault();
//       this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//     }

//     render() {
//       return (
//         <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
//           <YOUR_FRONT_CCOMPONENT>
//             This is the front of the card.
//             <button onClick={this.handleClick}>Click to flip</button>
//           </YOUR_FRONT_CCOMPONENT>
//           </ReactCardFlip>
//       )
//     }
//   }
export default CardFlip;
