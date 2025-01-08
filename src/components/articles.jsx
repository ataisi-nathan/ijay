import React from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/articleData";
import Article from "../assets/article.png"
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Articles() {
    return (
        <div className="projects" id="project">
            <h3>
                Articles<span><img src={Article} alt="An icon for Articles" /></span>
            </h3>
            <div className="container">
                {articlesData.slice(0,3).map((article) => (
                    <a href={article.link} target="_blank" key={article.id} className={`grid-item grid-${article.id}`}>
                        <div
                            className="project-image"
                            style={{ backgroundImage: `url(${article.image})` }}
                        >
                        </div>
                        <h4>{article.title}</h4>
                        <p>{article.description}</p>
                    </a>
                ))}
                <div className="more">
                    <Link to="/articles">
                        <MdOutlineArrowRightAlt color="#F29F58" />
                        <p>See More</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Articles;
