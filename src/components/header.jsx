import { SiChatbot } from "react-icons/si"
import { FaGripLines, FaXmark } from "react-icons/fa6"
import { NavLink } from "react-router-dom";
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
                                to="/about"
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="contact">
                    <SiChatbot />
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
                                to="/about"
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}


export default Header;