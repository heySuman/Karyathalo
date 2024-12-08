import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/about" index element={<About />}></Route>
    </Routes>
  );
}

export default App;
