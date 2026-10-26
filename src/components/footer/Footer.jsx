import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <Link className="logo" to="/">
                        <span className="logo-icon">S</span>
                        SWIFTMESH
                    </Link>

                    <p>
                        Connecting ambitious organizations with the talent,
                        technology, and strategy to build what is next.
                    </p>
                </div>

                <div>
                    <h4>SERVICES</h4>
                    <Link to="/talent-staffing">Staffing</Link>
                    <Link to="/services">AI &amp; Data</Link>
                    <Link to="/services">Cybersecurity</Link>
                    <Link to="/services">Digital Delivery</Link>
                </div>

                <div>
                    <h4>COMPANY</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/insights">Insights</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &copy; 2026 SwiftMesh Solutions. Akshith Karanam.
                    All rights reserved.
                </p>

                <p>Privacy Policy &nbsp;&nbsp; Terms of Service</p>
            </div>
        </footer>
    );
};

export default Footer;