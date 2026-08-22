import "./Navbar.css";
import { Link  } from "react-router-dom";

function Navbar({darkMode, setDarkMode}) {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Job Application Tracker</h2>
      <div className="nav-links">
        <button><Link to= "/home">Home</Link></button> 
        <button><Link to= "/applications">Applications</Link></button>
        <button><Link to = "/add-job">Add Job</Link></button>

        <button onClick={()=> setDarkMode(!darkMode) }
          >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>
    </nav>
  )
}

export default Navbar
