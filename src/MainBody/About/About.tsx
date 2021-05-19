import React from "react";
import profilePic from './image.jpg';
import './About.css';


function About() {
    return (
        <section className="about" id="about">
            <div className="my-image">
                <img src={profilePic} alt="profile"/>
            </div>
            <div className="about-para">
                <p className="justify-content">
                    I am <span className="text-highlight">Backend Developer</span>. I enjoy writing <span
                    className="text-highlight">Optimized</span>, <span
                    className="text-highlight">Scalable</span> and <span className="text-highlight">Reusable</span> code
                    to create <span className="text-highlight"> Business Logic</span>.
                </p>
            </div>
        </section>);
}

export default About;