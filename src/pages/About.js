import react from "react";
import Hero from "../components/Hero/index.js";
import Content from "../components/Content";
import React, {useState} from 'react';


function About(props) {
    return (
      <div>
      <Hero title={props.title} />
      <Content>
        <p className="Introduction" style={{color:"#C49E93",fontsize: "24px",fontWeight: "bold",}}>
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
     </div>
    );
}
export default About;
