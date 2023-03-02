import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import MobileMenuButton from './MobileMenuButton';
import './Navbar.css';

const Navbar = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleClick = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <banner className="Navbar">
      <NavLink to={`/`}>
        <img id="navbar-logo-option" src={logo} alt="union logo" />
      </NavLink>
      <MobileMenuButton
        isMenuExpanded={isMenuExpanded}
        handleClick={handleClick}
      />
      <nav className={`navbar-options ${isMenuExpanded ? 'expanded' : ''}`}>
        <NavLink to={`/`} onClick={handleClick}>
          Home
        </NavLink>
        <NavLink to={`/faq`} onClick={handleClick}>
          FAQ
        </NavLink>
        <NavLink to={`/election-info`} onClick={handleClick}>
          Election
        </NavLink>
        <NavLink to={`/press`} onClick={handleClick}>
          Press
        </NavLink>
      </nav>
    </banner>
  );
};

export default Navbar;
