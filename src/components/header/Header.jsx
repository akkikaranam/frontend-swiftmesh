import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./Header.css";

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-content">
                <Link className="logo" to="/">
                    <span className="logo-icon">S</span>
                    SWIFTMESH
                </Link>

                <Navigation />

                <Link className="contact-button" to="/contact">
                    Let's Talk
                </Link>
            </div>
        </header>
    );
};

export default Header;