import React from 'react';
import { Card } from '../Card';
import img5 from '../../assets/projects/5.png';
import img2 from '../../assets/projects/2.png';
import img1 from '../../assets/projects/1.png';
import img6 from '../../assets/projects/6.png';
import img7 from '../../assets/projects/tesla.png';
import img8 from '../../assets/projects/bugtracker.png';

const projectArr = [
  {
    "img": img8,
    "title": "bug-tracker",
    "description": "coming soon"
  },
  {
    "img": img7,
    "title": "tesla clone",
    "description": "A responsive recreation of the Tesla website. Includes features: Side menu drop-in, background blur, and screen snapping.",
    "website": "https://tyl3r-s.github.io/tesla-clone/",
    "repo": "https://github.com/Tyl3r-s/tesla-clone",
    "details": "HTML, CSS, JavaScript",
  },
  {
    "img": img5,
    "title": "InnerPattern",
    "description": "A MERN stack single-page application where users can track their thoughts and 'moods' through journal entries.",
    "website": "http://innerpattern.herokuapp.com/",
    "repo": "https://github.com/Tyl3r-s/InnerPattern",
    "details": "React, JavaScript, Express, Node, MongoDB, Bootstrap, Mongoose, Apollo, Bcrypt, JWT, React-Router, HTML, CSS",
    "wireframe": "https://www.figma.com/file/cQQYMw0XmOibgt1nBy7JCx/innerpattern?node-id=108%3A287"
  },
  {
    "img": img6,
    "title": "Tech Blog",
    "description": "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    "website": "https://stark-wildwood-39109.herokuapp.com/",
    "repo": "https://github.com/Tyl3r-s/tech-blog",
    "details": "MySQL, JavaScript, Sequelize, Express, Node, Handlebars, express-session, HTML, CSS"
  },
  {
    "img": img2,
    "title": "Weather Dashboard",
    "description": "A javascript application which utilizes the OpenWeatherApp API to allow users to search for cities around the world, and view a 5 day forecast",
    "website": "https://tyl3r-s.github.io/weatherapp/",
    "repo": "https://github.com/Tyl3r-s/weatherapp",
    "details": "JavaScript, HTML, CSS, jQuery, OpenWeatherApp API"
  }
]

export default function Work() {
  return (
    <section className="projects" id="projects">
      <div className="workContainer">
      {projectArr.map(x => {
        return (
          <Card 
          title={x.title} 
          img={x.img} 
          desc={x.description} 
          website={x.website} 
          repo={x.repo} 
          details={x.details} 
          wireframe={x.wireframe}/>
        )
      })}
      </div>
    </section>
  );
}
