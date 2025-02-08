import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">FunFlow 🚀</h1>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="services" smooth={true} className="nav-item">Services</Link>
        <Link to="testimonials" smooth={true} className="nav-item">Testimonials</Link>
        <Link to="contact" smooth={true} className="nav-item">Contact</Link>
      </div>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
    </nav>
  );
};

export default Navbar;
