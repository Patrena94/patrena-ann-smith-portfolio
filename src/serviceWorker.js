import React from "react";
import logo from "../../assets/logo/PADSlogo.png";
import { capitalizeFirstLetter } from "../../utils/helpers";
import {useEffect} from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function Nav(props) {
    const {
      // projects = [],
      // setCurrentProject,
      contactSelected,
      currentProject,
      setContactSelected
    } = props;
  
    // useEffect(() => {
    //   document.title = capitalizeFirstLetter(currentProject.name);
    // }, [currentProject]);
  
  return (
    <header className="flex-row px-1">
     <h2>
         <img alt="logo" src={logo}/>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
          Profesional Summary
        </a>
      </li>
      <li className="mx-2">
          <a data-testid ="resume" href ="#../../pages/Resume.js" onClick={() => setContactSelected(false)}>Professional Experience</a>
        </li>
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
      </li>
        <li className="mx-2">
        <a data-testid ="portfolio" href ="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
        </li>   
    </ul>
  </nav>
  <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </header> 
  );
}

export default Nav;
