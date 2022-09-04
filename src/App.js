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

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <PeopleInSpaceProvider>
        <SideBar darkMode={darkMode}></SideBar>
        <div className="appContainer">
          <Header handleToggle={handleToggle}></Header>
          <Routes>
            <Route path="/" element={<Feed darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/images" element={<Images />} />
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
