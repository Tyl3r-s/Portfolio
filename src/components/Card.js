import React from 'react';

export function Card(props) {
    return (
        
        <div className="card">
            <h5 className="card-title">{props.title}</h5>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="projectDetails">{props.details}</p>
                <p className="card-text">{props.desc}</p>
                <section className="links">
                    <a href={props.website} className="cardBtn">live site</a>
                    <a href={props.repo} className="cardBtn">repo</a>
                </section>
            </div>
        </div>
    )
}

