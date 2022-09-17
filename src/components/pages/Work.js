import React from 'react';
import { Card } from '../Card';
import img1 from '../../assets/projects/1.png';
import img2 from '../../assets/projects/2.png';
import img3 from '../../assets/projects/3.png';
import img4 from '../../assets/projects/4.png';

const projectArr = [
  {
    "img": img1,
    "title": "Humble",
    "description": "blah blah blah"
  },
  {
    "img": img2,
    "title": "Weather App",
    "description": "aergreagrg"
  },
  {
    "img": img3,
    "title": "Work Day Scheduler",
    "description": "weragwegwgg"
  },
  {
    "img": img4,
    "title": "Code Quiz",
    "description": "weragwegwgg"
  }
]

export default function Work() {
  return (
    <section className="projects" id="projects">
      {projectArr.map(x => {
        return (
          <Card img={x.img} title={x.title} desc={x.description} />
        )
      })}
    </section>
  );
}
