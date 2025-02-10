import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🚜 JCB Solutions</div>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
