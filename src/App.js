import { Routes, Route } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import { SideBar } from "./components/SideBar/SideBar";
import { About } from './components/About/About';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import PeopleInSpaceProvider from "./contexts/PeopleInSpaceContext";

function App() {
  return (
    <div className="App">
      <PeopleInSpaceProvider>
        <SideBar></SideBar>
        <div>
          <h1>
            <img src="nasa-logo.png" alt="" />
            Dashboard
          </h1>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </PeopleInSpaceProvider>
    </div>
  );
}

export default App;
