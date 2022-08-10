import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Profiles from "./pages/Profiles";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
