import React from 'react';

const ProjectCard = ({ image, title, description, libraries, githubLink, siteLink }) => {
  return (
    <div className=" bg-white rounded-lg p-20 shadow-md">
      <img src={image} alt={title} className="mb-4" />
      <h3 className="text-3xl text-indigo-700 mb-2">{title}</h3>
      <p className="mb-4 text-gray-500 text-sm">{description}</p>
      <div className="flex justify-start">
        {libraries.map((library, index) => (
          <div key={index} className="bg-white text-indigo-800 outline rounded-lg px-3 py-1 text-sm  mr-3">
            {library}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <a href={githubLink} className="text-indigo-800 border-b border-indigo-800" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={siteLink} className="text-indigo-800 border-b border-indigo-800" target="_blank" rel="noopener noreferrer">
          View Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

