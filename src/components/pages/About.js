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
            {/* I was that kid who would get a new toy and take it apart - just to see how it works before putting it back together.
            I am still that same kid, but now I take apart tools, cars, electronics etc, to see how they work, and to fix them.
            Naturally, coding is the perfect thing for me. There is no end to the complexity, no shortage of bugs to dig up and
            always something to make more efficient, or to expand on. The imagination is really the limit. 

            I have come to really love knowing each tiny little detail about an application, and knowing exactly how and why something works, 
            and why it doesn't work. I get lost for hours writing, and then writing again - each time just a little bit more improved.    */}
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
