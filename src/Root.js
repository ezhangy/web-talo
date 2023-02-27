import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

const Root = () => {
  return (
    <>
        <Banner />
        <Navbar />
        <div className="page-wrapper">
          <Outlet />
          <Footer />
        </div>
    </>
  )
}

export default Root