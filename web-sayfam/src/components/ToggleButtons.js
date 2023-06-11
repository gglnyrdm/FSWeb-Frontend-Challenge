import { useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/localStorageKullan";
import mockData from "../mockData.json";

function ToggleButtons({ setData }) {
  const [turkish, setTurkish] = useLocalStorage("turkish", false);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    axios.post("https://reqres.in/api/workintech", mockData)
      .then((response) => {
        if (turkish) {
          setData(response.data["tr"]);
        } else {
          setData(response.data["en"]);
        }
      });
  }, [turkish, setData]);

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

