import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F9F9F9' }} className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className='text-4xl mt-20 font-bold ml-20 text-left'>Let's work together on <br/> your next product.</p>
          <a href="mailto:yardimoglugulin@gmail.com" style={{ color: "#AF0C48" }} className="underline text-left block mt-10 mb-10 ml-20">yardimoglugulin@gmail.com</a>
        </div>
        <div className='mt-20 '>
          <a href="https://www.personalblog.com">Personal Blog</a>
          <a className='ml-10' href="https://github.com/gglnyrdm" style={{ color: "#00AB6B" }}>Github</a>
          <a className='ml-10' href="https://www.linkedin.com/in/glnyrdm/" style={{ color: "#0077B5" }}>Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
