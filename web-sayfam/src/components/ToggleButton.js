import React, { useState } from 'react';

function ToggleButtons() {
  const [darkMode, setDarkMode] = useState(false);
  const [turkish, setTurkish] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const toggleTurkish = () => {
    setTurkish(!turkish);
  };

  return (
    <div className={`flex justify-end px-7 py-7 ${darkMode ? 'dark-mode' : ''}`}>
      <span style={{ color: "#777777", fontWeight: "bold" }} className="toggle-link" onClick={toggleDarkMode}>
        {darkMode ? 'LIGHT MODE ⎮' : 'DARK MODE ⎮'}
      </span>
      <span style={{ color: "#777777", fontWeight: "bold" }} className="toggle-link" onClick={toggleTurkish}>
        {turkish ? ' ENGLISH' : " TÜRKÇE'YE GEÇ"}
      </span>
    </div>
  );
}

export default ToggleButtons;
