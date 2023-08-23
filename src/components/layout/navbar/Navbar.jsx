import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import SubNavbar from "./subNav/SubNav";
import { Link } from "react-router-dom";
import LoginWidget from "../../common/loginWidget/LoginWidget";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <section className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/dhme3fmky/image/upload/v1689678297/Proyecto%20React%20CoderHouse/xhrevrgrcl0janonrzu1.png"
              alt="Logotipo de CEROL HOUSE"
            />
          </Link>
        </div>
        <div className="icons-container">
          <LoginWidget />

          <CartWidget />
        </div>
      </section>
      <SubNavbar />
    </section>
  );
};

export default Navbar;
