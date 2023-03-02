import logo from '@assets/images/logo.png';
import '@styles/Navbar.css';
import { useState } from 'react';
import MobileMenuButton from './MobileMenuButton';

type Props = {
  children: React.ReactNode;
};

const Navbar = ({ children }: Props) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleClick = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <header className="Navbar">
      <a href={`/`}>
        <img id="navbar-logo-option" src={logo} alt="union logo" />
      </a>
      <MobileMenuButton
        isMenuExpanded={isMenuExpanded}
        handleClick={handleClick}
      />
      <nav className={`navbar-options ${isMenuExpanded ? 'expanded' : ''}`}>
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
