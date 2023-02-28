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
    <banner className="Navbar">
      <NavLink to={`/`}>
        <img id="navbar-logo-option" src={logo} alt="union logo"/>
      </NavLink>
      <MobileMenuButton 
        isMenuExpanded={isMenuExpanded} 
        handleClick={handleClick} 
      />
      <nav className={
          `navbar-options ${isMenuExpanded 
            ? "expanded"
            : ""
          }`
        }>
        <NavLink to={`/`} onClick={handleClick}>Home</NavLink>
        <NavLink to={`/faq`} onClick={handleClick}>FAQ</NavLink>
        <NavLink to={`/election-info`} onClick={handleClick}>Election</NavLink>
        <NavLink to={`/press`} onClick={handleClick}>Press</NavLink>
      </nav>
    </banner>
  )
}


export default Navbar