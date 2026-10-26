import "./InfoCard.css";

const InfoCard = ({ label, title, text, children }) => {
    return (
        <article className="info-card">
            <p className="info-label">{label}</p>
            <h3>{title}</h3>
            <p className="info-text">{text}</p>
            {children}
        </article>
    );
};

export default InfoCard;