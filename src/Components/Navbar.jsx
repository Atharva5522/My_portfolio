import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>

    <div className="navbar">
        <div className="logo">
        <h1>Atharva Singh Rajput</h1>
        </div>

        <div className="list">
            <ul>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                
                <Link to={"/about"}>
                <li>About Me</li>
                </Link>

                <Link to={"/project"}>
                <li>Projects</li>
                </Link>

                
                <Link to={"/contact"}>
                    <li>Skills</li>
                </Link>

                <Link to={"/conect"}>
                  <li>Contact</li>
                </Link>
                
                
                
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default Navbar
