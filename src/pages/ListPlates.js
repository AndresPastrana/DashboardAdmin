import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const ListPlates = () => {
  return (
    <div className="container">
      <SideBar />
      <main>
        <Header />
        <div className="body">
        <h1>Table of products</h1>
        </div>
      </main>
    </div>
  );
};

export default ListPlates;
