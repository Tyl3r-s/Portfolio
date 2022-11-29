import React from 'react';
import portrait from '../../assets/about/Me.jpg';
import workResume from '../../assets/resume/tylerscottresume.pdf'
import { Modal, Tab } from 'react-bootstrap';

export default function About() {
  return (
    <section className="about-me-section" id="about-me-section">
      <div className="leftCol">
        <div className="abtTitle">
          <h1 className="about-title">Hello World!</h1>
        </div>
        <div className="abtText">
          <h5 className="about-text">
            I'm Tyler, a full stack developer near Toronto. I love learning, and imagining creative solutions.
            I typically focus on the MERN stack, but am still exploring and ready to pivot to other technologies and frameworks as needed,
            or that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!

          </h5>
        </div>
      </div>
      <div className="rightCol">
        <div className="blur"></div>
        <img src={portrait} alt="" className="me" />
      </div>

    </section>
  );
}
