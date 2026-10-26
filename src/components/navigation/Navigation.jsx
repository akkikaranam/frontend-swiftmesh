import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/insights">Insights</NavLink>
        </li>
        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
