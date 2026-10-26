import { Link } from "react-router-dom";
import ServiceCard from "../../components/service-card/ServiceCard";
import ArticleCard from "../../components/article-card/ArticleCard";
import InfoCard from "../../components/info-card/InfoCard";
import "./Home.css";

import teamImage from "../../images/team.jpg";
import ladypcImage from "../../images/ladypc.jpg";
import holoscreensImage from "../../images/holoscreens.jpg";
import cubeImage from "../../images/cube.jpg";
import tableImage from "../../images/table.jpg";
const Home = () => {
    return (
        <main className="page-home">
            <section id="hero">
                <div className="hero-text">
                    <p className="sub-text1">TALENT x TECHNOLOGY</p>

                    <h1>
                        Build smarter teams.
                        <br />
                        Create what's next.
                    </h1>

                    <p className="intro">
                        SwiftMesh connects organizations with exceptional
                        technology talent and practical AI, data, and
                        cybersecurity solutions.
                    </p>

                    <div className="button-row">
                        <Link
                            className="button button-blue"
                            to="/services"
                        >
                            Explore Services
                        </Link>

                        <Link
                            className="button button-dark"
                            to="/careers"
                        >
                            Find Your Opportunity
                        </Link>
                    </div>
                </div>

                <img
                    className="hero-image"
                    src={teamImage}
                    alt="Team working together in an office"
                />
            </section>

            <section id="capabilities">
                <InfoCard
                    label="♙"
                    title="Technology Talent"
                    text=""
                />

                <InfoCard
                    label="◈"
                    title="AI & Data Solutions"
                    text=""
                />

                <InfoCard
                    label="⛨"
                    title="Cybersecurity Strategy"
                    text=""
                />

                <InfoCard
                    label="⇢"
                    title="Digital Transformation"
                    text=""
                />
            </section>

            <section id="services" className="page-section">
                <p className="sub-text1">OUR SERVICES</p>
                <h2>Solutions built for momentum</h2>

                <div className="cards">
                    <ServiceCard
                        icon="♙"
                        title="Talent & Staffing"
                        description="Connecting organizations with technology professionals who bring the needed experience to every project."
                        to="/talent-staffing"
                    />

                    <ServiceCard
                        icon="◈"
                        title="AI & Data"
                        description="Developing intelligent data platforms, predictive models, and practical AI strategies that create real value."
                        to="/contact"
                    />

                    <ServiceCard
                        icon="⛨"
                        title="Cybersecurity"
                        description="Protecting digital infrastructure, assessing system risks, and strengthening security for every organization."
                        to="/contact"
                    />

                    <ServiceCard
                        icon="⇢"
                        title="Digital Delivery"
                        description="Ensuring products, cloud solutions, and digital projects are completed with speed and confidence."
                        to="/contact"
                    />
                </div>
            </section>

            <section id="about" className="expertise-section">
                <img
                    src={ladypcImage}
                    alt="Technology professional working"
                />

                <div className="expertise-text">
                    <p className="sub-text1">INTEGRATED EXPERTISE</p>
                    <h2>People and technology, working as one.</h2>

                    <p>
                        SwiftMesh combines experienced consultants with
                        modern technology strategy to deliver results.
                        We bridge the gap between high-level architecture
                        and everyday engineering execution.
                    </p>

                    <Link className="text-link" to="/about">
                        Meet SwiftMesh →
                    </Link>
                </div>
            </section>

            <section id="industries" className="page-section">
                <p className="sub-text1">INDUSTRIES</p>
                <h2>Expertise where it matters most</h2>

                <div className="industry-row">
                    <span>Healthcare</span>
                    <span>Financial Services</span>
                    <span>Government</span>
                    <span>Retail &amp; Commerce</span>
                    <span>Technology</span>
                </div>
            </section>

            <section id="insights" className="page-section">
                <p className="sub-text1">INSIGHTS</p>
                <h2>Ideas for what's ahead</h2>

                <div className="cards">
                    <ArticleCard
                        src={holoscreensImage}
                        title="How AI Is Reshaping the Modern Workforce"
                        category="ARTIFICIAL INTELLIGENCE"
                        to="/ai-workforce"
                    />

                    <ArticleCard
                        src={cubeImage}
                        title="Building Cyber Resilience Before It's Needed"
                        category="CYBERSECURITY"
                        to="/insights"
                    />

                    <ArticleCard
                        src={tableImage}
                        title="Why Great Tech Teams Are Built Differently"
                        category="TALENT STRATEGY"
                        to="/insights"
                    />
                </div>
            </section>

            <section id="hiring">
                <p className="sub-text1">WE'RE HIRING</p>
                <h2>Your next opportunity starts here.</h2>

                <p>Join projects that solve meaningful challenges and move careers forward.</p>
                <Link
                    className="button button-white"
                    to="/careers"
                >
                    Explore Careers
                </Link>
            </section>
        </main>
    );
};

export default Home;