import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({
    src, title, category, date, description, author, to
}) => {
    return (
        <article className="article-cards">
            <img src={src} alt={title} />
            <div className="article-text">
                <p className="cards-title">{category}</p>
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{description}</p>
                <p>{author}</p>

                <Link className="link" to={to}>
                    Read Article →
                </Link>
            </div>
        </article>
    );
};

export default ArticleCard;