import React from "react";
import Logo from "../images/react-logo.png"

export default function Navbar() {
  return (
    <header>
      <nav className = "navbar">
        <div className = "navbar-elem-one">
      	  <img src = {Logo} alt = "react-logo"/>
          <h1>ReactFacts</h1>
        </div>

        <div className = "navbar-elem-two">
          <div>React Course - Project 1</div>
        </div>
      </nav>
    </header>
  )
}