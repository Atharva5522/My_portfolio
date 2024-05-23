import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Project from "./Pages/Project"
import Conect from "./Pages/Conect"


const App = () => {
  return (
    <div>

    <Router>
    <Navbar/>

    <div className="main-container">

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/conect" element={<Conect/>}/>
    </Routes>

    </div>

    </Router>
      
    </div>
  )
}

export default App
