import React from 'react';

const Skill = ({ title, description }) => {
  return (
    <div className="flex flex-col text-left">
      <h3 className="text-3xl text-indigo-700 ">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <div id="skills">
      <h2 className="text-5xl font-semibold mt-20 text-left">{skills.title}</h2>
      <div className="flex flex-col mt-4 space-y-4 md:space-y-0 md:flex-row md:space-x-20">
        <Skill title={skills.javaTitle} description={skills.javaDescription} />
        <Skill title={skills.reactTitle} description={skills.reactDescription} />
        <Skill title={skills.nodeTitle} description={skills.nodeDescription} />
      </div>
      <div className="mt-8 border-b"></div>
    </div>
  );
};

export default Skills;
