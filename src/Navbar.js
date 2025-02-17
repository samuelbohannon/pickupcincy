import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router
import './css/NavBar.css'; // optional CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Clean Up Cinci</Link> {/* Use Link here */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> {/* Use Link for navigation */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
