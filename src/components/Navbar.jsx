import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Job Application Tracker</h2>
      <div className="nav-links">
        <button><a href= "/">Home</a></button> 
        <button><a href = "/applications">Applications</a></button>
        <button><a href = "/add-job">Add Job</a></button>
      </div>
    </nav>
  )
}

export default Navbar
