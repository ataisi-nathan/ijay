import { SiChatbot } from "react-icons/si"
import { FaGripLines, FaXmark } from "react-icons/fa6"
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive((prevState) => !prevState)
    }
    return (
        <>
            <header className="header">
                <h1 className="logo">
                    Ijay<span>.</span>
                </h1>
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
                                to="/articles"
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                Articles
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
                <div className="contact">
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
                <div className="ham">
                    <FaGripLines onClick={toggleClass} className={isActive ? "show hide" : "show"} />
                    <FaXmark onClick={toggleClass} className={isActive ? "show" : "show hide"}/>
                </div>
            </header>
            <div className={isActive ? "mobile-nav": "mobile-nav hide"}>
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
                                to="/articles"
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                Articles
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
            </div>
        </>
    );
}


export default Header;