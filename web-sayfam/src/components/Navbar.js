import React from 'react';

function Navbar({ navbar }) {
  function scrollToSkillsDiv() {
    const divElement = document.getElementById('skills');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToProjectsDiv() {
    const divElement = document.getElementById('projects');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex justify-end px-7 sm:justify-end sm:pr-2">
      <div className="flex">
        <button className="ml-2 my-10 sm:ml-4 sm:my-2" onClick={scrollToSkillsDiv}>
          {navbar.skills}
        </button>
        <button className="ml-2 my-10 sm:ml-20 sm:my-2" onClick={scrollToProjectsDiv}>
          {navbar.projects}
        </button>
        <a href="mailto:yardimoglugulin@gmail.com">
          <button
            style={{
              color: '#3730A3',
              outlineStyle: 'solid',
              outlineColor: '#3730A3',
              outlineOffset: '5px',
              borderRadius: '0.5px',
              padding: '0.5px 8px',
            }}
            className="ml-2 my-10 sm:ml-20 sm:my-2 sm:outline-offset-1 sm:outline">
            {navbar.contact}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
