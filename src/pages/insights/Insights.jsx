import { Link } from "react-router-dom";
import ArticleCard from "../../components/article-card/ArticleCard";
import "./Insights.css";

import insights1Image from "../../images/insights1.jpg";
import insights2Image from "../../images/insights2.jpg";
import insights3Image from "../../images/insights3.jpg";
import insights4Image from "../../images/insights4.jpg";
import insights5Image from "../../images/insights5.jpg";
import insights6Image from "../../images/insights6.jpg";
import insights7Image from "../../images/insights7.jpg";
import cubeImage from "../../images/cube.jpg";
import tableImage from "../../images/table.jpg";
import teamImage from "../../images/team.jpg";
const Insights = () => {
  return (
    <main className="page-insights dots-surface">
      <section id="insights-hero">
        <p className="sub-text1">SWIFTMESH THOUGHT LEADERSHIP</p>

        <h1>
          Ideas for the future of work
          <br />
          and technology.
        </h1>

        <div className="article-filters">
          <button type="button" className="selected-filter">
            All Articles
          </button>
          <button type="button">Artificial Intelligence</button>
          <button type="button">Cloud Native </button>
          <button type="button">Cybersecurity</button>
          <button type="button">Engineering </button>
          <button type="button">Culture </button>
        </div>
      </section>

      <section id="featured-article">
        <img src={insights1Image} alt="AI workspace" />

        <div className="featured-text">
          <p className="sub-text1">FEATURED ARTICLE</p>

          <h2>How AI Is Reshaping the Modern Workforce</h2>

          <p className="intro">
            Artificial intelligence isn't just automating mundane workloads—it
            is re-engineering strategic workflows. Explore how elite
            organizations deploy agentic models safely.
          </p>

          <p className="author">David Kross</p>
          <p className="date">Oct 14, 2026 • 8 min read</p>

          <Link className="link" to="/ai-workforce">
            Read Full Article →
          </Link>
        </div>
      </section>

      <section id="articles">
        <div className="article-list">
          <ArticleCard
            src={insights2Image}
            title="Building Resilient LLM Workflows"
            category="AI Solutions"
            date="Sep 28, 2026 • 6 min read"
            description="Practical guidance for designing reliable large-language-model workflows for real business use."
            author="By SwiftMesh Editorial Team"
            to="/llm-workflows"
          />

          <ArticleCard
            src={insights3Image}
            title="Scaling Kubernetes Past 10,000 Nodes"
            category="Cloud Native"
            date="Sep 22, 2026 • 9 min read"
            description="Strategies for operating large-scale cloud infrastructure with confidence."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={insights4Image}
            title="Zero Trust Architecture Paradigms"
            category="Cybersecurity"
            date="Sep 15, 2026 • 7 min read"
            description="An overview of modern security approaches built around continuous verification."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={insights5Image}
            title="Why We Swapped to Monorepos"
            category="Engineering"
            date="Sep 08, 2026 • 5 min read"
            description="Why development teams may choose a monorepo structure to improve collaboration."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={insights6Image}
            title="The Pitfalls of Agentic RAG Systems"
            category="AI Solutions"
            date="Aug 29, 2026 • 11 min read"
            description="Common challenges to consider when developing agentic retrieval-augmented generation systems."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={insights7Image}
            title="Optimizing Serverless Cold Starts"
            category="Cloud Native"
            date="Aug 14, 2026 • 4 min read"
            description="Practical ways to reduce delays when serverless applications first start."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={cubeImage}
            title="Building Cyber Resilience Before It's Needed"
            category="Cybersecurity"
            date="Oct 2026 • 6 min read"
            description="How organizations can prepare their security strategy before a cyber incident occurs."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={tableImage}
            title="Why Great Tech Teams Are Built Differently"
            category="Talent Strategy"
            date="Jul 30, 2026 • 7 min read"
            description="The people, processes, and technical foundations that help high-performing teams succeed."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />

          <ArticleCard
            src={teamImage}
            title="Building Digital Products With Confidence"
            category="Digital Delivery"
            date="Jul 18, 2026 • 6 min read"
            description="How focused teams bring digital products from an initial idea to successful delivery."
            author="By SwiftMesh Editorial Team"
            to="/insights"
          />
        </div>
      </section>

      <section id="newsletter">
        <div className="newsletter-content">
          <h2>Never miss a technological shift</h2>

          <p>
            Join 12,000+ architects receiving our monthly tech blueprint
            insights.
          </p>
        </div>

        <div className="email">
          <input type="email" placeholder="Enter your email address" />

          <button type="button" className="button button-blue">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
};

export default Insights;
