import { FaEnvelope, FaPhone } from "react-icons/fa6";
import profile from "../assets/profile.png"


function Contact() {
    return(
        <div className="contact">
            <div className="contact-left">
                <h2>Get In Touch<span>.</span></h2>
                <p>Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
                <br />
                <p>
                    <FaEnvelope /> 
                    <a href="mailto:example@email.com">example@email.com</a>
                </p>
                <p>
                    <FaPhone />
                    <a href="tel:+2348123456789 ">+234 (0) 812 3456 789</a>
                </p>

            </div>
            <div className="hero__right">
                <div className="hero__circle">
                </div>
                <img className="photo" src={profile} alt="Ijay's picture" />
            </div>
        </div>
    )
}

export default Contact;