import { NavLink, Link } from "react-router-dom";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__nav">
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
                <div className="footer__socials">
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="footer__social-link"
                    >
                        <SiInstagram size={24} />
                    </a>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="footer__social-link"
                    >
                        <SiLinkedin size={24} />
                    </a>
                    <a 
                        href="https://www.github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="footer__social-link"
                    >
                        <SiGithub size={24} />
                    </a>
                </div>
            </div>
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
        </footer>
    );
}

export default Footer;
