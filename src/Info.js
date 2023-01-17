import React from "react";
import James from "./James.jpg";

export default function Info() {
  return (
    <div className="Info">
     <img src={James} alt = "James Lee" className="info-image"></img>
     <h1>James Lee</h1>
     <h3>Full Stack Developer</h3>
     <h3><a href="https://www.linkedin.com/in/james-lee-361820149/">jameslee.website</a></h3>
     
    <a href="mailto:leejames0106@gmail.com">
      <button className="info-button">Email
      </button>
     </a> 
    </div>
  )
}