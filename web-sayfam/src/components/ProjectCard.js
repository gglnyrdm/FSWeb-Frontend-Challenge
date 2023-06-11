import React from 'react';

const ProjectCard = ({ images, title, description, libraries, githubLink, siteLink }) => {
  return (
    <div className="mb-8 p-4">
      <img src={images} alt="images" className="mb-4 object-cover h-40 w-full rounded-lg" />
      <h3 className="text-2xl text-indigo-700 mb-2">{title}</h3>
      <p className="mb-4 text-gray-500 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {libraries.map((library, index) => (
          <div key={index} className="bg-white text-indigo-800 border border-indigo-800 rounded-lg px-3 py-1 text-sm">
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
