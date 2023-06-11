import React from 'react';

const Profile = ({ profile }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl font-semibold mt-10 text-left">{profile.title}</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-4">
          <h3 className="text-left text-indigo-700 text-3xl mb-2">{profile.title}</h3>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">{profile.birthday}</span>
            <span className='pl-20'>24.03.1992</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">{profile.city}</span>
            <span className='pl-20'>{profile.myCity}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">{profile.education}</span>
            <span className='pl-20'>{profile.myEducation}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">{profile.role}</span>
            <span className='pl-20'>Full Stack Developer</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h3 className="text-left text-3xl text-indigo-700 mb-2">{profile.subhead}</h3>
          <div className="ml-auto text-gray-500 text-left">
            <p>
              {profile.text}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-b"></div>
    </div>
  );
};

export default Profile;
