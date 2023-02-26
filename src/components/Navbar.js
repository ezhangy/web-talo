import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../assets/images/logo.png"

const Navbar = () => (
    <div className="Navbar">
      <img id="navbar-logo-option" src={logo}/>
        <button id="menu-trigger" aria-labelledby="button-label">
          <span id="button-label" hidden>Menu</span>
          <svg id="hamburger" aria-hidden="true" focusable ="false" viewBox="0 0 32 32">
            <rect x="1" y="4" fill="#FFF" width="30" height="4"></rect>
            <rect x="1" y="16" fill="#FFF" width="30" height="4"></rect>
            <rect x="1" y="28" fill="#FFF" width="30" height="4"></rect>
          </svg>
        </button>
      <div className="navbar-options">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/faq`}>FAQ</NavLink>
        <NavLink to={`/press`}>Press</NavLink>
        <NavLink to={`/election-info`}>Election</NavLink>
      </div>
    </div>
)


export default Navbar