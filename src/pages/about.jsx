import ExperienceData from "../data/experienceData"

function AboutMe() {
    return(
        <div className="about-me">
            <h2>About me<span>.</span></h2>
            <p className="about-paragraph">Building and Maintaining High-Performance Backend Systems, Focusing on Scalability, Security, and Reliability to Support Business Critical Applications.</p>
            <h3 className="myExperience">My Experience<span>.</span></h3>
            <ul>
                {ExperienceData.map((experience) => (
                    <li key={experience.id}>
                        <h5>{experience.position}</h5>
                        <h3>{experience.name}</h3>
                        <p>{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutMe