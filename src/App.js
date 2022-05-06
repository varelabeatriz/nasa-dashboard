import { Routes, Route } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import { SideBar } from "./components/SideBar/SideBar";
import { About } from './components/About/About';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import PeopleInSpaceProvider from "./contexts/PeopleInSpaceContext";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <PeopleInSpaceProvider>
        <SideBar></SideBar>
        <div>
          <div>
            
            <Header></Header>
          </div>
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
