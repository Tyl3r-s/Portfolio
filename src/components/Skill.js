import React from 'react';

export function Skill(props) {
    return (

        <div className="skill">
            <img src={props.img} className="skill-img" alt="..." />
            <h5 className="skill-title">{props.title}</h5>
        </div>
    )
}