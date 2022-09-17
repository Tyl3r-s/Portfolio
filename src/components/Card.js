import React from 'react';

export function Card(props) {
    return (
        
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <section className="links">
                    <button className="btn btn-primary">Visit Page</button>
                    <button className="btn btn-primary">Visit Repo</button>
                </section>
            </div>
        </div>
    )
}

