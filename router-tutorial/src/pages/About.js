import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const loaction = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 공부 프로젝트</p>
      <p>쿼리스트링 : {loaction.search}</p>
    </div>
  );
};

export default About;
