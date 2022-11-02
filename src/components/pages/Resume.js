import React from 'react';
import workResume from "../../assets/resume/tylerscottresume.pdf";



const Resume = () => {
    return (
        <section className="resumeSection">
            <a href={workResume} download>download</a>
            <iframe className="resume" src="https://resume.creddle.io/embed/9gs3poo1p3v"></iframe>
        </section>
    )
}

export default Resume;
