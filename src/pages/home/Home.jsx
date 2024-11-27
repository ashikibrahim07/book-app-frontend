import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recomended from "./Recommended";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recomended />
      <News />
    </>
  );
};

export default Home;
