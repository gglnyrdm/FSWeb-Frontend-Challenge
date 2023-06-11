import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer style={{ backgroundColor: '#F9F9F9' }} className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-2/5">
          <p className='text-4xl mt-20 font-bold text-left whitespace-pre-line'>
            {footer.text}
          </p>
          <a href="mailto:yardimoglugulin@gmail.com" style={{ color: "#AF0C48" }} className="underline text-left block mt-10 mb-10">
            {footer.email}
          </a>
        </div>
        <div className='flex flex-col md:flex-row mt-20'>
          <a href="https://www.personalblog.com">{footer.site}</a>
          <a className='ml-10' href="https://github.com/gglnyrdm" style={{ color: "#00AB6B" }}>Github</a>
          <a className='ml-10' href="https://www.linkedin.com/in/glnyrdm/" style={{ color: "#0077B5" }}>Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
