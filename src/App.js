import { Routes, Route } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import { SideBar } from "./components/SideBar/SideBar";
import { About } from './components/About/About';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import PeopleInSpaceProvider from "./contexts/PeopleInSpaceContext";
import { Header } from "./components/Header/Header";
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <PeopleInSpaceProvider>
        <SideBar darkMode={darkMode}></SideBar>
        <div>
          <Header handleToggle={handleToggle}></Header>
          <Routes>
            <Route path="/" element={<Feed darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </PeopleInSpaceProvider>
    </div>
  );
}

export default App;
