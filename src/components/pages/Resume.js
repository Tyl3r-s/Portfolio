import React from 'react';
import { ResumeSection } from '../ResumeSections';

export default function Resume() {
    const resumeArr = [
        {
            "title": "University of Toronto",
            "data": "Certificate - Full Stack Web Development"
        },
        {
            "title": "Languages",
            "data": "Html, CSS, JavaScript"
        },
        {
            "title": "Libraries",
            "data": "jQuery, Bootstrap, Express.js, Node.js, Hanndlebars.js, React.js"
        },
        {
            "title": "Databases",
            "data": "MySQL, MongoDB, IndexedDB"
        },
        {
            "title": "Tools",
            "data": "Git, Web API, Third-Party API, RESTful API, Sequelize, Mongoose, Webpack"
        },
        {
            "title": "Principles",
            "data": "Model-View-Controller, Object-Relational-Mapping, Test Driven Development, Separation of Concerns, DRY, YAGNI, Object Oriented Programming, Documentation"
        }
    ]
    return (
        <div className="skills-n-stuff">
            <div>
                <h3>Tyler Scott</h3>
                <p>Full Stack Web Developer</p>
            </div>
            <div>
                {resumeArr.map(x => {
                    return (
                        <ResumeSection title={x.title} data={x.data} />
                    )
                })}
                <div>
                    <dt>Download my resume here</dt>

                    <dd>
                        <span>tyler_scott_full_stack_developer.pdf</span>
                        <a href="#" download="Tyler Scott Resume.pdf"> Download</a>
                    </dd>
                </div>
            </div>
        </div>
    );
}