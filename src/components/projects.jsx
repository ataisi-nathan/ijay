import React from "react";
import projectsData from "../data/projectsData";

function Projects() {
    return (
        <div className="projects" id="project">
            <h3>
                Projects<span>.</span>
            </h3>
            <div className="container">
                {projectsData.map((project) => (
                    <div key={project.id} className={`grid-item grid-${project.id}`}>
                        <div
                            className="project-image"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
