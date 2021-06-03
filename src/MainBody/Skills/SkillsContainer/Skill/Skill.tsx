import React from "react";
import "./Skill.css";

function Skill(props: any) {
    return (<div className="skill-progress">
        <div className={props.skillPercentageClass + " " + props.skillColorClass}
             data-bar-width={props.skillPercentage}>
            <div className="skill-name">
                <span>{props.skillName}</span>
            </div>
        </div>
    </div>);
}

export default Skill;