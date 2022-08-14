import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Profiles from "./pages/Profiles";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profiles />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
