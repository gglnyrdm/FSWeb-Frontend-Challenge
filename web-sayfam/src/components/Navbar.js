import React from 'react';

function Navbar() {

    function scrollToSkillsDiv(){
        const divElement = document.getElementById('skills');
        divElement.scrollIntoView({ behavior: 'smooth' });
      }
      function scrollToProjectsDiv(){
        const divElement = document.getElementById('projects');
        divElement.scrollIntoView({ behavior: 'smooth' });
      }
  
  return (
    <div className="flex justify-end px-7" >
      <button className='ml-32 my-10' onClick={scrollToSkillsDiv} > Skills </button>
      <button className='ml-32 my-10' onClick={scrollToProjectsDiv}> Projects </button>
      <a href="mailto:yardimoglugulin@gmail.com">
      <button style={{color:"#3730A3", outlineStyle:"solid", outlineColor:"#3730A3", outlineOffset:"10px", borderRadius:"0.5px", padding:"0.5px 8px"}} className="ml-32 my-10"> Hire Me </button>
      </a>
    </div>
  );
}

export default Navbar;