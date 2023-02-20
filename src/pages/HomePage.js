import bannerImg from "../assets/images/banner.jpg"
import logo from "../assets/images/logo.png"
import "./HomePage.css"

const HomePage = () => (
  <div className="page-wrapper">
    <div id="header-wrapper">
      <img id="logo" src={logo}/>
      <div id="title-wrapper">
        <h1>Teaching Assistant Labor Organization</h1>
        <p>The Teaching Assistant Labor Organization (TALO) represents Undergraduate Teaching Assistants in the Computer Science department at Brown.</p>
      </div>
    </div>
    {/* TODO: add alt text */}
    <img src={bannerImg}/>
    <div className="section-wrapper">
      <h2>We're Unionizing!</h2>
      <p>Undergraduate TAs in the CS Department are filing for unionization and seeking recognition from Brown. We are seeking <strong>higher wages</strong>, <strong>better working conditions</strong>, and a <strong> more inclusive workplace</strong>.</p>
      <button>View our press release</button>
    </div>
  </div>
)

export default HomePage