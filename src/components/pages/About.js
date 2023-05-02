import React from 'react';
import portrait from '../../assets/about/Me.jpg';
import Dropdown from '../Dropdown';
import Footer from '../Footer';

export default function About() {
  return (
    <div>
      <Dropdown />
      <section className="about-me-section" id="about-me-section">
        <div className="leftCol">
          <div className="abtTitle">
            <h1 className="about-title">Hello World!</h1>
          </div>
          <div className="abtText">
            <h5 className="about-text">
              I'm Tyler, a Full Stack Web Developer who specializes in MERN stack and Microsoft SQL. With certification in Full Stack Web Development from the University of Toronto, I have a deep understanding for version control and agile methodologies, as well as many other industry standard techniques. My passion for enriching people's lives using code drives me to continually optimize my skills and stay up-to-date with the latest industry trends. Let's collaborate to make a significant impact together!
            </h5>
          </div>
        </div>
        <div className="rightCol">
          <div className="blur"></div>
          <img src={portrait} alt="" className="me" />
        </div>

      </section>
      <Footer />
    </div>
  );
}
