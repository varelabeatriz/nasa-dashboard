import { Routes, Route } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import { SideBar } from "./components/SideBar/SideBar";
import { About } from './components/About/About';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div>
        <h1>Title</h1>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
