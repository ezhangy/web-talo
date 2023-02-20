import { NavLink, Outlet } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => (
  <>
    <div className="Navbar">
      <div>
        <NavLink to={`/`}>Home</NavLink>
      </div>
      <div>
        <NavLink to={`/faq`}>Frequently Asked Questions</NavLink>
      </div>
    </div>
    <Outlet />
  </>
)


export default Navbar