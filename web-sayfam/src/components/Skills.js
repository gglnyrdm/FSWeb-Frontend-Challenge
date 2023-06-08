import React from 'react';

const Skill = ({ title, description }) => {
  return (
    <div className="flex flex-col text-left">
      <h3 className="text-3xl text-indigo-700 ">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: 'JavaScript',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'React.js',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Node.js',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div id='skills'>
      <h2 className="text-5xl font-semibold mt-20 text-left">Skills</h2>
      <div className="flex mt-4 space-x-20">
        {skillsData.map((skill, index) => (
          <Skill key={index} title={skill.title} description={skill.description} />
        ))}
      </div>
      <div className="mt-8 border-b"></div>
    </div>
  );
};

export default Skills;