import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
};

export default NavBar;