import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description, to }) => {
    return (
        <article className="service-card">
            <div className="service-hero">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>

            <Link className="text-link" to={to}>
                Explore Solution →
            </Link>
        </article>
    );
};

export default ServiceCard;