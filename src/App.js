import React from "react";
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"


export default function App() {
  return (
  <div className="container">
    <div className="Main">
      <Info />
      <About />
      <Interests />
    </div>
      <div className="Footer-container">
        <Footer />
      </div>
  </div>
  )
}


