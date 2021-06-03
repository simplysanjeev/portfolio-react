import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import {faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';
import SkillsContainer from "./SkillsContainer/SkillsConatiner";

function Skills() {
    return (
        <section className="skills" id="skills">
            <SectionHeader icon={faChalkboardTeacher} name="skills"/>
            <SkillsContainer/>
        </section>
    );
}

export default Skills;