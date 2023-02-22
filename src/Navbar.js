import { NavLink, Outlet } from "react-router-dom"
import "./Navbar.css"
import logo from "./assets/images/logo.png"

const Navbar = () => (
  <>
    <div className="Navbar">
      <img id="navbar-logo-option" src={logo}/>
      <div id="navbar-options">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/faq`}>Frequently Asked Questions</NavLink>
      </div>
    </div>
    <Outlet />
  </>
)


export default Navbar