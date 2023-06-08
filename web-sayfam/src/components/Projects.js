import React from 'react';
import ProjectCard from './ProjectCard';
import foto1 from "../assets/images/project1.png";
import foto2 from "../assets/images/project2.png";
import foto3 from "../assets/images/project3.png";

const Projects = () => {
  const projects = [
    {
      image: foto1,
      title: 'Minnet Günlüğü',
      description: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is avaiable as a NPM package and the git repository makes any type of customization to code and themes possible.',
      libraries: ['axios', 'redux', 'react'],
      githubLink: 'https://github.com/project1',
      siteLink: 'https://workintech-gunluk.netlify.app/'
    },
    {
      image: foto2,
      title: 'Film Listesi',
      description: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is avaiable as a NPM package and the git repository makes any type of customization to code and themes possible.',      libraries: ['axios', 'redux', 'react'],
      githubLink: 'https://github.com/project2',
      siteLink: 'https://workintech-film-list.netlify.app//'
    },
    
    {
      image: foto3,
      title: 'Project 3',
      description: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is avaiable as a NPM package and the git repository makes any type of customization to code and themes possible.',      libraries: ['axios', 'redux', 'react'],
      githubLink: 'https://github.com/project3',
      siteLink: 'https://project3.com'
    }
  ];

  return (
    <div id='projects'>
      <h2 className="text-5xl font-semibold mt-10 text-left">Projects</h2>
      <div className="text-left grid grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
