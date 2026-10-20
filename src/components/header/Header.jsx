import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-content">
                <a className="logo" href="index.html">
                    <span className="logo-icon">S</span>
                    SWIFTMESH
                </a>

                <Navigation />

                <a className="contact-button" href="contact.html">
                    Let's Talk
                </a>
            </div>
        </header>
    );
};

export default Header;