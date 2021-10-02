// import React from "react";
// import Sound from "react-sound";
import ReactCardFlip from "react-card-flip";
import React,{useState} from "react";
import pr from "./../../assets/career/pr.jpg";

const CardFlip =()=> {

const[isFlipped, setIsFlipped] = useState(false);
const handleClick = () =>{
    setIsFlipped(!isFlipped);
};
return(
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div style={{backgroundColor: "black", height: 100, color:"goldenrod", display:"flex", justifyContent: "center", alignItems:"center"}}>
            This is the front of the card

            {/* <li className="location-front-image">
            <h3>{name}</h3> */}
        <img className="location-front-image" src={pr} alt="healthcare Recruiter"/>
        <button className="front-flip-button" onClick={handleClick}>Click to Learn More</button> 
       {/* </li> */}
        </div>
        <div style={{backgroundColor:"goldenrod", height: 100, color: "black",display:"flex", justifyContent: "center", alignItems:"center"}}>
        {/* <li className="location-back-item">  
        <Sound url={music} 
         playStatus={isFlipped ? Sound.status.PLAYING : Sound.status.STOPPED}/>   */}

        <h3>On-site Relationship Manager</h3>
         <img className="location-back-image" src={pr} alt="healthcare Recruiter"/> 
        <button className="back-flip-button" onClick={handleClick}>click to View</button>   
    {/* </li>  */}
    </div>
    </ReactCardFlip>
)
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