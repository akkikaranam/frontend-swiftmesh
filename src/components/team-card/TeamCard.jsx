import "./TeamCard.css";

const TeamCard = ({ src, name, role, description }) => {
  return (
    <div className="team-card">
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p className="team-role">{role}</p>
      <p>{description}</p>
    </div>
  );
};

export default TeamCard;
