import React from 'react';

export function Card(props) {
    return (
        
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <section className="links">
                    <a href={props.website} className="cardBtn">Deployed App</a>
                    <a href={props.repo} className="cardBtn">Repository</a>
                </section>
            </div>
        </div>
    )
}

