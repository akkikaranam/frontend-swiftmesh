import { Link } from "react-router-dom";
import ServiceCard from "../../components/service-card/ServiceCard";
import "./Services.css";

import teamImage from "../../images/team.jpg";
const Services = () => {
    return (
        <main className="page-services">
            <section id="services-hero">
                <div className="hero-text">
                    <p className="sub-text1">SERVICES</p>

                    <h1>
                        The expertise to
                        <br />
                        move your business
                        <br />
                        forward.</h1>
            
                    <p className="intro">We combine exceptional talent with practical technology solutions to help organizations move with confidence. </p>

                    <Link
                        className="button button-blue"
                        to="/contact">
                        Talk to An Expert
                    </Link>
                </div>

                <img
                    className="hero-image"
                    src={teamImage}
                    alt="SwiftMesh technology team"
                />
            </section>

            <section id="service-details">
                <p className="sub-text1">WHAT WE DO</p>
                <h2>Connected solutions. Measurable impact.</h2>

                <p className="section-intro">
                    From the right people to the right technology,
                    SwiftMesh helps organizations turn ambitious
                    goals into stronger outcomes.
                </p>

                <div className="service-details-cards">
                    <ServiceCard
                        icon="♙"
                        title="Talent & Staffing"
                        description="Find experienced technology professionals for critical projects and long-term growth."
                        to="/talent-staffing"
                    />

                    <ServiceCard
                        icon="◈"
                        title="AI & Data"
                        description="Turn information into useful insights with data strategy, analytics, automation, and practical AI solutions."
                        to="/contact"
                    />

                    <ServiceCard
                        icon="⛨"
                        title="Cybersecurity"
                        description="Strengthen your digital security with risk assessments, modern defenses, and practical guidance."
                        to="/contact"
                    />

                    <ServiceCard
                        icon="⇢"
                        title="Digital Delivery"
                        description="Bring applications, cloud solutions, and digital projects from idea to successful delivery."
                        to="/contact"
                    />
                </div>
            </section>

            <section id="services-action">
                <p className="sub-text1">LET'S GET STARTED</p>
                <h2>Need a solution built around your goals?</h2>

                <Link
                    className="button button-white"
                    to="/contact">
                    Talk to an Expert
                </Link>
            </section>
        </main>
    );
};

export default Services;