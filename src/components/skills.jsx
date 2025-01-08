import skill from "../assets/skill.png"

function Skills() {
    return (
        <div className="skills">
            <h3>Skills<span><img src={skill} alt="A skill icon" /></span></h3>
            <div className="skill-container">
                <div className="backend">
                    <h4>Backend</h4>
                    <p>NodeJS</p>
                    <p>MongoDB</p>
                    <p>ExpressJS</p>
                    <p>Vercel</p>
                </div>
                <div className="backend">
                    <h4>Backend</h4>
                    <p>NodeJS</p>
                    <p>MongoDB</p>
                    <p>ExpressJS</p>
                    <p>Vercel</p>
                </div>
                <div className="backend">
                    <h4>Soft Skills</h4>
                    <p>Effective communication</p>
                    <p>Collaboration</p>
                    <p>Commitment</p>
                    <p>Leadership</p>
                </div>
            </div>
        </div>
    )
}
export default Skills;