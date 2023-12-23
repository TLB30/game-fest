import React, { useEffect } from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";
import Layout from "./Layout";
const Home = ({ cat, selectList, object }) => {
  console.log("home runs");

  useEffect(() => {
    if (!object) return;
    selectList(object);
    console.log("the home passed the object");
  }, [object]);
  return (
    <>
      <Navbar />
      <Layout cat={cat} />
    </>
  );
};

export default Home;
