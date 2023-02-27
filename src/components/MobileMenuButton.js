import "./MobileMenuButton.css"

const HamburgerIcon = () => (
  <svg className="menu-icon" aria-hidden="true" focusable ="false" viewBox="0 0 32 32">
    <rect x="1" y="4" fill="#FFF" width="30" height="4"></rect>
    <rect x="1" y="16" fill="#FFF" width="30" height="4"></rect>
    <rect x="1" y="28" fill="#FFF" width="30" height="4"></rect>
  </svg>
)

const XIcon = () => (
  <svg className="menu-icon" aria-hidden="true" focusable ="false" viewBox="0 0 32 32">
    <line 
      x1="2" y1="2" x2="30" y2="30" stroke="#FFF" strokeWidth="4"
    ></line>
        <line 
      x1="2" y1="30" x2="30" y2="2" stroke="#FFF"  strokeWidth="4"
    ></line>
  </svg>
)

const MobileMenuButton = ({ isMenuExpanded, handleClick }) => {
  return (
    <button 
      className="MobileMenuButton" 
      aria-labelledby="button-label"
      onClick = {handleClick}
    >
      <span id="button-label" hidden>Menu</span>
      {isMenuExpanded 
        ? <XIcon />
        : <HamburgerIcon />
      }
    </button>
  )
}

export default MobileMenuButton;