import { Routes, Route } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import { SideBar } from "./components/SideBar/SideBar";
import { About } from './components/About/About';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import PeopleInSpaceProvider from "./contexts/PeopleInSpaceContext";
import { Header } from "./components/Header/Header";
import { useState } from 'react';
import { Images } from "./components/Images/Images";
import { PeopleInSpace } from "./components/PeopleInSpace/PeopleInSpace";
import { SolarSystem } from "./components/SolarSystem/SolarSystem";
import { useQuery, useQueryClient } from "react-query";
import Axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
      setDarkMode(!darkMode);
    };

    const today = new Date(), 
    yyyy = today.getFullYear(),
    month = today.toLocaleString('en-GB', { month: 'long' });

    let dd = today.getDate(),
    mm = today.getMonth();

    if (dd.toString().length < 2){
        dd = "0"+dd;
    }

    if (mm.toString().length < 2){
        mm = "0"+mm;
    }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <PeopleInSpaceProvider>
        <SideBar darkMode={darkMode}></SideBar>
        <div className="appContainer">
          <Header handleToggle={handleToggle}></Header>
          <Routes>
            <Route path="/" element={<Feed darkMode={darkMode} yyyy={yyyy} month={month} dd={dd} />} />
            <Route path="/about" element={<About />} />
            <Route path="/images" element={<Images yyyy={yyyy} month={month} dd={dd} mm={mm}/>} />
            <Route path="/people-in-space" element={<PeopleInSpace />} />
            <Route path="/github" element={<About />} />
            <Route path="/solar-system" element={<SolarSystem />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </PeopleInSpaceProvider>
    </div>
  );
}

export default App;
