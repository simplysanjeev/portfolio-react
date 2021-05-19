import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";

import './MainBody.css'

function MainBody() {
    return (
        <main>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Portfolio/>
            <Contact/>
        </main>
    );
}

export default MainBody;