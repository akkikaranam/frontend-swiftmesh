import { Link } from "react-router-dom";
import teamImage from "../../images/team.jpg";
const TalentStaffing = () => {
  return (
    <>
      <p className="sub-text1">TALENT &amp; STAFFING</p>
      <h1>Technology talent built around your goals.</h1>

      <p className="intro">
        SwiftMesh connects organizations with experienced technology
        professionals who can contribute from day one.
      </p>

      <img
        className="detail-image"
        src={teamImage}
        alt="SwiftMesh technology team"
      />

      <section className="detail-content">
        <h2>The right people for critical work.</h2>

        <p>
          Finding the right technical talent can determine whether an important
          project moves forward or loses momentum. SwiftMesh helps businesses
          connect with qualified professionals in software development, data,
          cloud technology, cybersecurity, and project delivery.
        </p>

        <p>
          Our staffing approach begins with understanding the role, the team,
          and the goals behind the project. We then focus on professionals whose
          skills and experience fit the real work your organization needs
          completed.
        </p>

        <h2>What we can help you find</h2>

        <ul className="detail-list">
          <li>Software engineers and application developers</li>
          <li>Data analysts, data engineers, and AI specialists</li>
          <li>Cloud, cybersecurity, and infrastructure professionals</li>
          <li>Project managers and technical delivery leaders</li>
        </ul>

        <Link className="button button-blue" to="/contact">
          Talk to a Staffing Expert
        </Link>
      </section>
    </>
  );
};

export default TalentStaffing;
