import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <a href="services.html">Services</a>
                    <span className="nav-divider">|</span>
                </li>
                <li>
                    <a href="about.html">About</a>
                    <span className="nav-divider">|</span>
                </li>
                <li>
                    <a href="insights.html">Insights</a>
                    <span className="nav-divider">|</span>
                </li>
                <li>
                    <a href="careers.html">Careers</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;