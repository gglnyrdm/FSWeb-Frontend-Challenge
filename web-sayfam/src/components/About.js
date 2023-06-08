import React from 'react';
import foto from "../assets/images/developer.png";



const About = () => {
  return (
    <div className="flex flex-column">
      <div className="w-full p-10">
        <div className="flex items-center mb-4">
          <div className="w-10 h-px bg-indigo-700 mr-4"></div>
          <span className="text-left text-indigo-700">Gülin Yardımoğlu</span>
        </div>
        <h1 className="text-4xl text-gray-800 font-bold mb-4 text-left">Creative Thinker <br/> Minimalism Lover</h1>
        <p className="text-lg text-left">
          Hi, I’m Gülin. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences, let’s shake hands with me.
        </p>
        <div className="flex mt-4">
        <a href="mailto:yardimoglugulin@gmail.com">
          <button className="py-2 px-4 rounded bg-indigo-800 mr-4 text-white">Hire Me</button>
          </a>
          
          <a href="https://github.com/gglnyrdm" target="_blank" rel="noopener noreferrer" className="py-2 px-4 outline rounded mr-4 text-indigo-800">
          
            GitHub</a>
          <a href="https://www.linkedin.com/in/glnyrdm/" target="_blank" rel="noopener noreferrer" className="py-2 px-4 rounded outline text-indigo-800">LinkedIn</a>
        </div>
      </div>

      <div className="w-full p-5 flex justify-end items-end">
        <img src={foto} alt="photo" className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default About;