import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import projectsData from "../data/projectsData";
import Project from "../assets/project.png"

function Projects() {
    return (
        <div className="projects" id="project">
            <h3>
                Projects<span><img src={Project} alt="An Icon for Projects" /></span>
            </h3>
            <div className="container">
                {projectsData.map((project) => (
                    <div key={project.id} className={`grid-item grid-${project.id}`}>
                        <div
                            className="project-image"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                        </div>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}
                <div className="more">
                    <Link to="/projects">
                        <MdOutlineArrowRightAlt color="#F29F58" />
                        <p>See More</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;
