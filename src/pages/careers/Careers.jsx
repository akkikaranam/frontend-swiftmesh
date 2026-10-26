import { Link } from "react-router-dom";
import InfoCard from "../../components/info-card/InfoCard";
import JobCard from "../../components/job-card/JobCard";
import "./Careers.css";

import careerImage from "../../images/career.jpg";
const Careers = () => {
    return (
        <main className="page-careers">
            <section id="careers-hero">
                <div className="hero-text">
                    <p className="sub-text1">JOIN THE TEAM</p>

                    <h1>
                        Do work that moves the
                        <br />
                        future forward.
                    </h1>
                    <p className="intro">We operate as a highly integrated mesh of global talent. Build elite systems alongside senior peers, without bureaucratic friction.</p>
                </div>

                <img
                    className="hero-image"
                    src={careerImage}
                    alt="Technology professionals collaborating"
                />
            </section>

            <section id="culture">
                <p className="sub-text1">OUR CULTURE</p>
                <h2>What makes SwiftMesh different</h2>

                <div className="culture-cards">
                    <InfoCard
                        label=""
                        title="Meaningful Work"
                        text="No placeholder projects. We architect and implement critical core systems for growing enterprises."
                    />

                    <InfoCard
                        label=""
                        title="Real Growth"
                        text="Every engineer has dedicated budget and time allocation for professional certifications and research."
                    />

                    <InfoCard
                        label=""
                        title="Flexible Collaboration"
                        text="Outcome-based remote systems with local hubs. Work wherever you operate at your best."
                    />
                </div>
            </section>

            <section id="open-positions">
                <p className="sub-text1">OPEN POSITIONS</p>
                <h2>Explore active roles</h2>
                <div className="job-filters">
                    <button type="button" className="selected-filter">All Depts</button>
                    <button type="button">Engineering</button>
                    <button type="button">Solutions</button>
                    <button type="button">Operations</button>
                </div>

                <div className="job-list">
                    <JobCard
                        category="SOLUTIONS - Full Time"
                        title="AI Solutions Consultant"
                        location="Atlanta, GA / Remote"
                        to="/ai-solutions-consultant"
                    />

                    <JobCard
                        category="ENGINEERING - Full Time"
                        title="Senior Data Engineer"
                        location="Remote (US)"
                        to="/contact"
                    />

                    <JobCard
                        category="SECURITY - Full Time"
                        title="Cybersecurity Analyst"
                        location="New York, NY / Hybrid"
                        to="/contact"
                    />

                    <JobCard
                        category="PEOPLE - Full Time"
                        title="Technical Recruiter"
                        location="Atlanta, GA / Hybrid"
                        to="/contact"
                    />

                    <JobCard
                        category="ENGINEERING - Full Time"
                        title="Cloud Application Developer"
                        location="Remote (US/Canada)"
                        to="/contact"
                    />

                    <JobCard
                        category="OPERATIONS - Full Time"
                        title="Project Delivery Manager"
                        location="Chicago, IL / Hybrid"
                        to="/contact"
                    />
                </div>
            </section>

            <section id="stay-connected">
                <p className="sub-text1">STAY CONNECTED</p>
                <h2>Don't see a perfect alignment today?</h2>
                <p> We are always expanding our network of premium architects, developers, and practitioners. Join our global roster.</p>

                <Link
                    className="button button-blue"
                    to="/contact">
                    Join Our Talent Network
                </Link>
            </section>
        </main>
    );
};

export default Careers;