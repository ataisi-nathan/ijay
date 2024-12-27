import projectsData from "../data/projectsData";

function ProjectPage() {
    return (
        <div className="ProjectPage">
            <h2>My <span>Best</span> Creations</h2>
            <p>Building and Maintaining High-Performance Backend Systems, Focusing on Scalability, Security, and Reliability to Support Business Critical Applications</p>

            <ul>
                {projectsData.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProjectPage;