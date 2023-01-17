import React from "react";
import Twitter from "./T.png";
import Facebook  from "./FB.png";
import Instagram  from "./IG.png";
import Linkedin  from "./L.png";
import GitHub from "./G.png";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={Twitter} alt = "James Lee"></img>
       <img src={Facebook} alt = "James Lee"></img>
       <img src={Instagram} alt = "James Lee"></img>
       
       <a href="https://www.linkedin.com/in/james-lee-361820149/" target="_blank">
        <img src={Linkedin} alt = "James Lee"></img>
       </a>
       
       <a href="https://github.com/jameslee0106" target="_blank">
        <img src={GitHub} alt = "James Lee"></img>
        </a>
    </div>
  )
}