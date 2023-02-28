import envelopeIcon from '../assets/icons/envelope-regular.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import tiktokIcon from '../assets/icons/tiktok.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <a
        className="social-media-link"
        href="https://www.tiktok.com/@talabororg"
      >
        <img className="social-media-icon" src={tiktokIcon} alt="Tiktok logo" />{' '}
        @talabororg
      </a>
      <a
        className="social-media-link"
        href="https://www.instagram.com/talabororg/"
      >
        <img
          className="social-media-icon"
          src={instagramIcon}
          alt="Instagram logo"
        />{' '}
        @talabororg
      </a>
      <a className="social-media-link" href="mailto:talabororg@gmail.com">
        <img className="social-media-icon" src={envelopeIcon} alt="Mail Icon" />{' '}
        talabororg@gmail.com
      </a>
    </div>
  );
};

export default Footer;
