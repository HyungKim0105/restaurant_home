import "../App.css"
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok }from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-link">
          <Link to="/" className="foot">Home</Link>
          <Link to="/Menu" className="foot" >Menu</Link>
          <Link to="/About" className="foot" >About</Link>
        </div>
        <div className="footer-contact">
          <h1>Contact</h1>
          <a href="mailto:info@koreanfriedchicken.com">
            <p>Email: info@koreanfriedchicken.com</p>
          </a>
          <p>Address: 22 W 34 ST., New York City NY, 10001</p>
          <p>Phone: (212)000-0000</p>
        </div>
        <div className="socialLink">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="social">
            <FaTwitter />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="social">
            <FaTiktok />
          </a>
        </div>
    </div>
  )
}

export default Footer