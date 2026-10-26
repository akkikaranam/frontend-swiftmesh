import { Link } from "react-router-dom";
import InfoCard from "../../components/info-card/InfoCard";
import "./Contact.css";

const Contact = () => {
    return (
        <main className="page-contact dots-surface">
            <section id="contact-hero">
                <p className="sub-text1">CONNECT WITH US</p>
                <h1>Let's create what's next.</h1>

                <p className="intro">Tell us what you are working toward. Our team will help connect the right people, strategy, and technology.</p>
            </section>

            <section id="contact-main">
                <form id="contact-form" noValidate>
                    <h2>Send a Message</h2>

                    <label htmlFor="name">Your Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        autoComplete="name"
                        required
                        minLength="2"
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="company">Company Name</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        autoComplete="organization"
                        required
                    />

                    <label htmlFor="service">
                        Target Service Needs
                    </label>

                    <select id="service" name="service" required>
                        <option value="">
                            Select a solution target...
                        </option>
                        <option>Technology Talent</option>
                        <option>AI &amp; Data</option>
                        <option>Cybersecurity</option>
                        <option>Digital Delivery</option>
                    </select>

                    <label htmlFor="details">Project Details</label>
                    <textarea
                        id="details"
                        name="message"
                        placeholder="Tell us about your objectives, timeline, and tech stack..."
                        required
                        minLength="10"
                    ></textarea>

                    <button
                        className="button button-blue"
                        type="button"
                    >
                        Submit Proposal Inquiry
                    </button>

                    <p id="result" className="form-status"></p>
                </form>

                <div className="contact-details">
                    <h2>Contact Details</h2>

                    <InfoCard
                        label="TIMINGS"
                        title=""
                        text="Hours: Monday–Friday: 7:00 AM – 7:00 PM; Saturday: 9:00 AM – 5:00 PM; Sunday: Closed"
                    />

                    <InfoCard
                        label="PHONE NUMBER"
                        title=""
                        text="+1 (949)-748-6334"
                    />

                    <InfoCard
                        label="GLOBAL HEADQUARTERS"
                        title=""
                        text="Irvine, California"
                    />
                </div>
            </section>

            <section id="contact-options">
                <p className="sub-text1">DIFFERENT PATHS</p>
                <h2>How can we assist your business?</h2>

                <div className="contact-option-cards">
                    <InfoCard
                        label=""
                        title="Find Talent"
                        text="Leverage our deep technical networks to augment your core product engineering teams instantly."
                    >
                        <Link className="link" to="/services">
                            Inquire Staffing →
                        </Link>
                    </InfoCard>

                    <InfoCard
                        label=""
                        title="Build Technology"
                        text="Get specialized solution architects to build your custom machine-learning, database, or cloud pipelines."
                    >
                        <Link className="link" to="/services">
                            Inquire Architecture →
                        </Link>
                    </InfoCard>

                    <InfoCard
                        label=""
                        title="Explore Careers"
                        text="Review our cultural values, certifications program, and open remote positions."
                    >
                        <Link className="link" to="/careers">
                            Join the Network →
                        </Link>
                    </InfoCard>
                </div>
            </section>
        </main>
    );
};

export default Contact;