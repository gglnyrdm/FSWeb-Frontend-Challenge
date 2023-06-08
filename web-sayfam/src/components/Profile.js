import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl font-semibold mt-10 text-left">Profile</h2>
      <div className="flex">
        <div className="w-1/2 p-10">
          <h3 className="text-left text-indigo-700 text-3xl mb-2">Profile</h3>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">Doğum Tarihi</span>
            <span className='pl-20'>24.03.1992</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">İkamet Şehri</span>
            <span className='pl-20'>Ankara</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">Eğitim Durumu</span>
            <span className='pl-20'>Ege Üniversitesi Lisans</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-32 text-left font-semibold">Tercih Ettiği Rol</span>
            <span className='pl-20'>Full Stack Developer</span>
          </div>
        </div>

        <div className="w-1/2 p-10">
          <h3 className="text-left text-3xl text-indigo-700 mb-2">About Me</h3>
          <div className="ml-auto text-gray-500 text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend risus at eleifend euismod. 
            </p>
            <p>
              Nullam tincidunt viverra ligula, vitae efficitur eros ullamcorper sed. Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-b"></div>
    </div>
  );
};

export default Profile;
