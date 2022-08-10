import React from "react";
import { Link } from "react-router-dom";

const Homes = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈 화면</p>

      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/avoid">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시 목록글</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homes;
