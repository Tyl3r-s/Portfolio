import React from 'react';
import portrait from '../../assets/about/Me.jpg';

export default function About() {
  return (
    <section className="about-me-section" id="about-me-section">
      <div className="leftCol">
        <div className="abtTitle">
          <h1 className="about-title">Hello World!</h1>
        </div>
        <div className="abtText">
          <p className="about-text">
            Technology has always been a huge fascination of mine, and jumping into code
            is one of the best decisions I've made in life. I have found a passion for creating succinct and intuitive user
            experiences, and I take pride in building efficient and organized back-end infrastructure. I truly love the
            endless discovery and learning that you find in the programming world.
          </p>
        </div>
      </div>
      <div className="rightCol">
        <div className="blur"></div>
        <img src={portrait} alt="" className="me" />
      </div>

    </section>
  );
}
