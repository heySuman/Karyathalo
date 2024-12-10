import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/about" index element={<About />}></Route>
      <Route path="/blogs" index element={<Blogs />}></Route>
    </Routes>
  );
}

export default App;
