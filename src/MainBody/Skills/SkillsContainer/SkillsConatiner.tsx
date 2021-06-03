import React from "react";
import "./SkillsContainer.css";
import Skill from "./Skill/Skill";

function SkillsContainer() {
    const skills = [{
        "skillName": "C",
        "skillPercentage": "50",
        "skillPercentageClass": "fifty-percent",
        "skillColorClass": "mb-blue"
    },
        {
            "skillName": "C++",
            "skillPercentage": "50",
            "skillPercentageClass": "fifty-percent",
            "skillColorClass": "mb-blue"
        },
        {
            "skillName": "Java",
            "skillPercentage": "50",
            "skillPercentageClass": "fifty-percent",
            "skillColorClass": "mb-blue"
        }, {
            "skillName": "Spring Boot",
            "skillPercentage": "50",
            "skillPercentageClass": "fifty-percent",
            "skillColorClass": "mb-blue"
        }, {
            "skillName": "Mysql",
            "skillPercentage": "50",
            "skillPercentageClass": "fifty-percent",
            "skillColorClass": "mb-blue"
        }];
    return (<div id="skills-container" className="skills-display">{skills.map((skill, index) => {
        return <Skill skillName={skill.skillName} skillPercentage={skill.skillPercentage}
                      skillPercentageClass={skill.skillPercentageClass} skillColorClass={skill.skillColorClass}
                      key={index}/>
    })}</div>);
}

export default SkillsContainer;