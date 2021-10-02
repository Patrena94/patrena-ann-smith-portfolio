// import React from "react";
// import Sound from "react-sound";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import pr from "./../../assets/career/pr.jpg";

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
        }}
      >
          <ul className="location-front-item">
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
          On-site Relationship Manager
        </h3>
        <img
          className="location-front-image justify-content-center py-5"
          src={pr}
          width="275"
          height="275"
          text="On-site Relationship Manager"
          alt="healthcare Recruiter"
        />
        <button className="front-flip-button" onClick={handleClick}>
          Click to Learn More
        </button>
        </ul> 
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
        }}
      >
        <ul className="location-back-item">
          {/* <Sound url={music} 
         playStatus={isFlipped ? Sound.status.PLAYING : Sound.status.STOPPED}/>   */}

          <h3
            className="justify-content-center"
            style={{
              color: "#914875",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              text: "font-weight-italix",
            }}
          >
            On-site Relationship Manager
          </h3>
          <img
            className="location-back-image justify-content-center py-5"
            src={pr}
            width="275"
            height="275"
            text="On-site Relationship Manager"
            alt="healthcare Recruiter"
          />
          <button className="back-flip-button" onClick={handleClick}>
            click to View
          </button>
        </ul>
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
