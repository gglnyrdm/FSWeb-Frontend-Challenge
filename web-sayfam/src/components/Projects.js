import React from 'react';
import ProjectCard from './ProjectCard';
import foto1 from "../assets/images/project1.png";
import foto2 from "../assets/images/project2.png";
import foto3 from "../assets/images/project3.png";

const Projects = ({projects}) => {

  const images = [foto1, foto2, foto3];

  return (
    <div id='projects'>
      <h2 className="text-5xl font-semibold mt-10 text-left">Projects</h2>
      <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} images={images[index]} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
