import articleData from "../data/articleData";

function ArticlesPage() {
    return (
        <div className="ArticlesPage ProjectPage">
            <h2>My <span>Articles</span></h2>
            <p>Building and Maintaining High-Performance Backend Systems, Focusing on Scalability, Security, and Reliability to Support Business Critical Applications</p>

            <ul>
                {articleData.map((article) => (
                    <li key={article.id}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ArticlesPage;