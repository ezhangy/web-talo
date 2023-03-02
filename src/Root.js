import { Outlet } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Root = () => {
  return (
    <>
      <a hidden href="#maincontent" className="screenreader-text">
        Skip to main content
      </a>
      <Banner />
      <Navbar />
      <div className="page-wrapper">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
