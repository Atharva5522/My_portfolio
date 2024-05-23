import img_one from "../assets/project_01.avif"
import img_two from "../assets/pro_two.jpg"
import img_three from "../assets/pro_three.webp" 
import img_four from "../assets/pro_twoo.avif"
import img_five from "../assets/pro_five.webp"
import img_six from "../assets/pro_six.jpg"

const Project = () => {
  return (
    <div>

<div className="project-page">
      <h1>Latest <span>Project</span></h1>

      <div className="headingg">
      <h2><span>HTML & CSS</span> Website Clone</h2>

      </div>


      <div className="html-projects">

        <a href="https://netflix-project-theta.vercel.app/"><div className="html-1">
        <img src={img_one} alt="" />

        </div></a>

        <a href="https://starbucks-flame.vercel.app/">
        <div className="html-2">
          <img src={img_two} alt="" />
        </div>
        </a>


        <a href="https://food-for-far.vercel.app/">
        <div className="html-3">
          <img src={img_three} alt="" />
        </div>
      
        </a>


    </div>

    {/* javascript-project */}

    <div className="headingg-2">
      <h2><span>Javascript</span> Project</h2>

      </div>

      <div className="javascript-project">

        <a href="https://weather-app-six-gules-97.vercel.app/"><div className="js-1">
        <img src={img_four} alt="" />

        </div></a>

        <a href="https://todo-javascript-inky.vercel.app/"><div className="js-2">
          <img src={img_five} alt="" />
        </div></a>

        <a href="https://feedback-javascript.vercel.app/"><div className="js-3">
        <img src={img_six} alt="" />

        </div></a>

      </div>
      
    </div>
    </div>
  )
}

export default Project
