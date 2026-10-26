import { Link } from "react-router-dom";
import insights1Image from "../../images/insights1.jpg";
const AiWorkforce = () => {
  return (
    <>
      <p className="sub-text1">ARTIFICIAL INTELLIGENCE</p>
      <h1>How AI Is Reshaping the Modern Workforce</h1>

      <p className="intro">
        Artificial intelligence is changing how teams analyze information, make
        decisions, and complete valuable work.
      </p>

      <img
        className="detail-image"
        src={insights1Image}
        alt="Artificial intelligence workspace"
      />

      <section className="detail-content">
        <h2>AI changes work, not the need for people.</h2>

        <p>
          AI can reduce repetitive tasks and help teams find useful patterns in
          large amounts of information. The most successful organizations use it
          to support employees rather than replace human judgment.
        </p>

        <p>
          As technology develops, companies need professionals who understand
          both the business goal and the risks involved. A strong AI strategy
          includes clear goals, responsible data practices, and employees who
          are ready to work with new tools.
        </p>

        <h2>What organizations should focus on</h2>

        <ul className="detail-list">
          <li>Train employees to use AI tools responsibly</li>
          <li>Protect sensitive company and customer data</li>
          <li>Use AI to improve important workflows</li>
          <li>Keep people involved in major decisions</li>
        </ul>

        <Link className="button button-blue" to="/insights">
          Back to Insights
        </Link>
      </section>
    </>
  );
};

export default AiWorkforce;
