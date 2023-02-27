import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png"
import "../App.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="links">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/Menu" className="link">Menu</Link>
        </li>
        <li>
          <Link to="Order" className="link">Order</Link>
        </li>
        <li>
          <Link to="/Reservation" className="link">Reservation</Link>
        </li>
        <li>
          <Link to="/About" className="link">About</Link>
        </li>
        <li>
          <Link to="/Contact" className="link">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
