import { Link } from "react-router-dom";
import InfoCard from "../../components/info-card/InfoCard";
import TeamCard from "../../components/team-card/TeamCard";
import "./About.css";

import about1Image from "../../images/about1.jpg";
import about2Image from "../../images/about2.jpg";
import about3Image from "../../images/about3.jpg";
import about4Image from "../../images/about4.jpg";
const About = () => {
    return (
        <main className="page-about">
            <section id="about-hero">
                <div className="hero-text">
                    <p className="sub-text1">ABOUT SWIFTMESH</p>
                       <h1>Built for the people
                        <br />
                        shaping what's next.</h1>
                    <p className="intro">We bring together elite technology architecture, deeply experienced engineers, and real human collaboration to build robust solutions that scale.</p>
                </div>

                <img
                    className="hero-image"
                    src={about1Image}
                    alt="Team working together"
                />
            </section>

            <section id="mission">
                <p className="sub-text1">OUR MISSION</p>
                <h2>We engineer speed, clarity, and scalability</h2>

                <p className="section-intro">SwiftMesh was founded to bridge the gap between complex software systems and ultimate business objectives. We believe that technology should never be a bottleneck.</p>

                <div className="value-cards">
                    <InfoCard
                        label="✦"
                        title="People First"
                        text="Empowering human potential always takes precedence over card automation."
                    />

                    <InfoCard
                        label="✦"
                        title="Practical Innovation"
                        text="We build only what drives authentic scale—no overly engineered noise."
                    />

                    <InfoCard
                        label="✦"
                        title="Shared Momentum"
                        text="We win together with continuous alignment, robust communication, and clear metrics."
                    />
                </div>
            </section>

            <section id="the-method">
                <p className="sub-text1">THE METHOD</p>
                <h2>How We Deliver Success</h2>

                <p className="section-intro">We maintain high standards by following a reliable, feedback-driven implementation pipeline.</p>
                
                <InfoCard
                    label="01"
                    title="Listen"
                    text="We learn your context, constraints, and ultimate outcomes first."
                />

                <InfoCard
                    label="02"
                    title="Align"
                    text="We create a focused blueprint with the right strategies."
                />

                <InfoCard
                    label="03"
                    title="Deliver"
                    text="We build transparently, shipping clean code in incremental cycles."
                />

                <InfoCard
                    label="04"
                    title="Grow"
                    text="We train on capability and provide ongoing platform optimization."
                />
            </section>

            <section id="leadership">
                <p className="sub-text1">LEADERSHIP</p>
                <h2>The minds behind SwiftMesh</h2>

                <div className="team-cards">
                    <TeamCard
                        src={about2Image}
                        name="Sarah Jenkins"
                        role="Chief Executive Officer"
                        description="Former VP of Engineering with 15+ years in enterprise cloud systems."
                    />

                    <TeamCard
                        src={about3Image}
                        name="David Rees"
                        role="Head of AI & Automation"
                        description="Researcher and engineer creating practical machine-learning strategies."
                    />

                    <TeamCard
                        src={about4Image}
                        name="Elena Rostova"
                        role="VP of Product Delivery"
                        description="Client partner developing scale-first digital architecture transformations."
                    />
                </div>
            </section>

            <section id="consultance">
                <h2>Ready to engineer your future?</h2>

                <Link
                    className="button button-blue"
                    to="/contact">
                    Consult Our Experts
                </Link>
            </section>
        </main>
    );
};

export default About;