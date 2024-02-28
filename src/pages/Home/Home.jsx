import React from "react";
import "./Home.css";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <SideBar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
