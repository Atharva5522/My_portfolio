import About from "./About";
import Project from "./Project";
import resume from "../assets/resume.jpg"
import Contact from "./Contact";
import Conect from "./Conect";
import men_img from "../assets/men_img.webp"


const Home = () => {
  return (
    <div>

    <div className="heading">

    

    <div className="left-section">
    <h2>Hey,<br/>I am <span>Atharva Singh Rajput</span>
    <br /> FRONTEND DEVELOPER
    </h2>
    <p>I am a Web Developer with extensive experiences for over 8 months. <br /> expertise is to create dynamic websities, website design, Frontend <br /> Design, and many more...</p>

    <a href={resume}><button>Download CV</button></a>

    </div>

    

    <div className="right-section">

    <img src={men_img} alt="" />

    </div>
    
    </div>

    <About/>
    <Project/>
    <Contact/>
    <Conect/>
    </div>

    
    
  )
}



export default Home
