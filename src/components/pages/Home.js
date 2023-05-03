import React from 'react';

function Home() {
  return (
    <section className="landing">

      <div className="landing-container">

        <div className="landing-title">
          <h1>
            Tyler Scott
          </h1>
          <p className="landing-subtitle">.designer &<span>&</span> <span>coder()</span></p>
          <div className="landingBtns">
            <a
              href="/ts-portfolio/#/About"
            >
              About
            </a>
            <a
              href="/ts-portfolio/#/Work"
            >
              Projects
            </a>
            <a
              href="/ts-portfolio/#/Skills"
            >
              Skills
            </a>
            <a
              href="/ts-portfolio/#/Contact"
            >
              Contact
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Home;
