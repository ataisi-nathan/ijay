import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contact">
                <h4>Interested in working together<span>?</span></h4>
                <div className="footer-container">
                    <div className="call-to-action">
                        <Link to="/contact" className="btn primary">
                            Get In Touch
                        </Link>
                        <Link to="/projects" className="btn basic">
                            Browse Projects
                        </Link>
                    </div>
                    <div className="copyright">
                        <p>©2025 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <br /><br />
        </footer>
    );
}

export default Footer;
