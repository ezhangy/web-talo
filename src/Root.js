import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Banner from "./components/Banner"

const Root = () => {
  return (
    <>
      <Banner />
        <Navbar />
        <Outlet />
    </>
  )
}

export default Root