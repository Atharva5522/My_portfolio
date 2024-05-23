import men_image from "../assets/men_img02.jpg"

const About = () => {
  return (
    <div>

    <div className="about-section">

    <div className="img-section">

    <img src={men_image} alt="" />

    </div>

    <div className="written-section">
        <h1>About <span>Me</span></h1>
        <h2>Frontend Developer</h2>
        <p>I'm Atharva Singh Rajput, a frontend developer passionate about crafting intutitive <br /> user experiences. With 8 months of experiences , i specialize in HTML, CSS, <br/> javascript, and farmeworks like React, Bootstrap , Material UI and Redux.I <br />thrive on staying updated with the latest trends and technologies to create <br /> innovative solutions. From pixel-perfect designs to responsive layouts, i'm <br />dedicated to brining yours ideas to life. Let's collaborate and build <br />something amazing together.</p>
    </div>
    

        
    </div>
    </div>
  )
}

export default About
