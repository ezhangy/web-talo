import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../assets/images/logo.png"
import MobileMenuButton from "./MobileMenuButton"
import { useState } from "react"


const Navbar = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  
  const handleClick = () => {
    setIsMenuExpanded(!isMenuExpanded)
    console.log("handle click")
  }

  return (
    <div className="Navbar">
      <img id="navbar-logo-option" src={logo}/>
      <MobileMenuButton 
        isMenuExpanded={isMenuExpanded} 
        handleClick={handleClick} 
      />
      <div className={
          `navbar-options ${isMenuExpanded 
            ? "expanded"
            : ""
          }`
        }>
        <NavLink to={`/`} onClick={handleClick}>Home</NavLink>
        <NavLink to={`/faq`} onClick={handleClick}>FAQ</NavLink>
        <NavLink to={`/press`} onClick={handleClick}>Press</NavLink>
        <NavLink to={`/election-info`} onClick={handleClick}>Election Info</NavLink>
      </div>
    </div>
  )
}


export default Navbar