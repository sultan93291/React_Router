import React from "react";
import "../../styles/home.css";
import Heading from "../../Tags/Heading";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <Heading TagName={"h1"} text={"home"} />
      </div>
    </div>
  );
};

export default Home;
