import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import mockData from "./mockData.json";
import ToggleButtons from "./components/ToggleButtons";

function App() {
  const [turkish, setTurkish] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post("https://reqres.in/api/workintech", mockData)
      .then((response) => {
        if (turkish) {
          setData(response.data["tr"]);
        } else {
          setData(response.data["en"]);
        }

        setLoading(false);
      });
  }, []);

  if (loading) {
    return (<div>Yükleniyor</div>);
  }

  return (
    <div className="App">
      <ToggleButtons setData={setData} />
      <Navbar navbar={data.navbar} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Profile profile={data.profile} />
      <Projects projects={data.projects} />
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
