import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ExperienceData from "../data/experienceData";

function Experience() {
    const [activeCompany, setActiveCompany] = useState(0);

    // const companies = [
    //     {
    //         name: "Company 1",
    //         position: "Position @ Company 1",
    //         duration: "Month 20YY - Present",
    //         details: [
    //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio facilis voluptate laudantium.",
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus."
    //         ]
    //     },
    //     {
    //         name: "Company 2",
    //         position: "Position @ Company 2",
    //         duration: "Month 20YY - Present",
    //         details: [
    //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio facilis voluptate laudantium.",
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus."
    //         ]
    //     },
    //     {
    //         name: "Company 3",
    //         position: "Position @ Company 3",
    //         duration: "Month 20YY - Present",
    //         details: [
    //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio facilis voluptate laudantium.",
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus."
    //         ]
    //     },
    //     {
    //         name: "Company 4",
    //         position: "Position @ Company 4",
    //         duration: "Month 20YY - Present",
    //         details: [
    //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio facilis voluptate laudantium.",
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus."
    //         ]
    //     }
    // ];

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
                Experience<span>.</span>
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
