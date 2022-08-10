import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Profiles from "./pages/Profiles";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profiles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </div>
  );
};

export default App;
