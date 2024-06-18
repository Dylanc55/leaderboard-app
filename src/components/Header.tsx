import React from "react";

import headerImg from "/logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <img src={headerImg} alt="" />
      <h1>Leaderboard</h1>
    </header>
  );
};

export default Header;
