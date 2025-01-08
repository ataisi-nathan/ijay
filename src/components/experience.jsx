import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ExperienceData from "../data/experienceData";
import Bag from "../assets/bag.png"

function Experience() {
    const [activeCompany, setActiveCompany] = useState(0);

    const nextCompany = () => {
        setActiveCompany((prev) => (prev + 1) % ExperienceData.length);
    };

    const prevCompany = () => {
        setActiveCompany((prev) => (prev - 1 + ExperienceData.length) % ExperienceData.length);
    };

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: nextCompany,
        onSwipedRight: prevCompany,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true
    });

    return (
        <div className="experience">
            <h3>
                Experience
                <span>
                    <img src={Bag} alt="An Icon for experience" />
                </span>
            </h3>
            <div className="experience-container">
                <div className="vertical-line">
                    {ExperienceData.map((_, index) => (
                        <span
                            key={index}
                            className={index === activeCompany ? "active" : ""}
                        ></span>
                    ))}
                </div>
                <div className="experience-company">
                    {ExperienceData.map((company, index) => (
                        <h4
                            key={index}
                            className={index === activeCompany ? "active" : ""}
                            onClick={() => setActiveCompany(index)}
                        >
                            {company.name}
                        </h4>
                    ))}
                </div>
                <div className="experience-detail">
                    <h4>
                        {ExperienceData[activeCompany].position} <span>@ {ExperienceData[activeCompany].name}</span>
                    </h4>
                    <h5>{ExperienceData[activeCompany].duration}</h5>
                    <ul>
                        {ExperienceData[activeCompany].details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                    <div className="navigation-arrows">
                        <button className="arrow" onClick={prevCompany}>
                            &#8592; {/* Left arrow */}
                        </button>
                        <button className="arrow" onClick={nextCompany}>
                            &#8594; {/* Right arrow */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
