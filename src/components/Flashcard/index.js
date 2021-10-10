import React,{ useState } from 'react';


export default function Flashcard({flashcard}) {
    const[flip, setFlip]=useState(false)
    console.log(flashcard.image)
    return (
        <div 
    className={`card ${flip ? 'flip' :''}`}
        onClick={()=> setFlip(!flip)}
        >
    <div className ="front"
      style={{
        backgroundColor: "black",
        padding: 0,
        height: 600,
        width: 600,
        flexDirection: 'column',
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
          className="location-front-image justify-content-center"
          src={require(flashcard.image).default}
          width="400"
          height="400"
          alt="healthcare Recruiter"
        />
           </div>

           <div className="back"style={{
          backgroundColor: "goldenrod",
          height: 600,
          padding: 0,
          width: 600,
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
             justifyContent: "center",
             textAlign: "center",
             text: "font-weight-italic",
             fontSize: "12px",
           }}className="font-weight-light white-text">{flashcard.description}</p>
           </div>
           </div>
    )
}
