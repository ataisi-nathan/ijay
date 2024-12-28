import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png"

function CallToAction() {
    return (
        <div className="call-to-action">
            <Link to="/contact" className="btn primary">
                Get In Touch
            </Link>
            <Link to="/projects" className="btn basic">
                Browse Projects
            </Link>
        </div>
    );
}

function Hero() {
    return (
        <section className="hero">
            <div className="hero__left">
                <p className="hero__greet">Hey, I'm Ijay👋🏻</p>
                <h2>
                    <span>Back</span>end <br/> Developer
                </h2>
                <p className="hero__intro">
                    I'm a backend developer based in Nigeria. I'll help you build reliable and highly scalable backend infrastructure that meets the demand of modern web applications.
                </p>
                <CallToAction />
            </div>
            <div className="hero__right">
                <div className="hero__circle">
                </div>
                <img className="photo" src={profile} alt="Ijay's picture" />
            </div>
        </section>
    );
}

export default Hero;
