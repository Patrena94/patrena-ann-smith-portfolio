import Hero from "../components/Hero/index.js";
import Content from "../components/Content";
import React from 'react';
import pads from "./../assets/photo/pads.jpg";


function About(props) {
    return (
      <div>
      <Hero title={props.title}/>
      <Content>
      <img src={pads}
      width="100"
      height="100"
      Padding="0"
      className="developer"
      alt="developer Patrena Ann Dametra Smith"
      />
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
