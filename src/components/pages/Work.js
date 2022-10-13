import React from 'react';
import { Card } from '../Card';
import img5 from '../../assets/projects/5.png';
import img2 from '../../assets/projects/2.png';
import img1 from '../../assets/projects/1.png';
import img6 from '../../assets/projects/6.png';

const projectArr = [
  {
    "img": img5,
    "title": "InnerPattern",
    "description": "A MERN stack single-page application where users can track their thoughts and 'moods' through journal entries.",
    "website": "http://innerpattern.herokuapp.com/",
    "repo": "https://github.com/Tyl3r-s/InnerPattern",
  },
  {
    "img": img6,
    "title": "Tech Blog",
    "description": "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    "website": "https://stark-wildwood-39109.herokuapp.com/",
    "repo": "https://github.com/Tyl3r-s/tech-blog"
  },
  {
    "img": img1,
    "title": "Humble",
    "description": "A full-stack MySQL application where users can create acounts, post pictures, and comment on posts.",
    "website": "https://glacial-wildwood-20620.herokuapp.com/",
    "repo": "https://github.com/tarequem/humble"
  },
  {
    "img": img2,
    "title": "Weather Dashboard",
    "description": "A javascript application which utilizes the OpenWeatherApp API to allow users to search for cities around the world, and view a 5 day forecast",
    "website": "https://tyl3r-s.github.io/weatherapp/",
    "repo": "https://github.com/Tyl3r-s/weatherapp"
  }
]

export default function Work() {
  return (
    <section className="projects" id="projects">
      {projectArr.map(x => {
        return (
          <div>
          <Card img={x.img} title={x.title} desc={x.description} website={x.website} repo={x.repo} />
          </div>
        )
      })}
    </section>
  );
}
