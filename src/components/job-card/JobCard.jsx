import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ category, title, location, to }) => {
    return (
        <div className="job-card">
            <p className="cards-title">{category}</p>
            <h3>{title}</h3>
            <p>{location}</p>

            <Link className="link" to={to}>
                Apply Now →
            </Link>
        </div>
    );
};

export default JobCard;