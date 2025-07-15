import "./Navbar.css";
import framer_icon from "../../assets/Framer.png";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={framer_icon} alt="" height="20px" />
          
        </div>
        <ul className="navbar-center">
          <li>Product</li>
          <li>Teams</li>
          <li>Resources</li>
          <li>Community</li>
          <li>Help</li>
          <li>Enterprise</li>
        </ul>
        <div className="navbar-right">
          <p>Login</p>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
