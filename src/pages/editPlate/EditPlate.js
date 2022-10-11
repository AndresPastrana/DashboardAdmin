import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";


const EditPlate = () => {
  return (
    <div className="container">
      <SideBar />
      <main>
        <Header />
        <div className="body">
          <h1>Edit Plate form</h1>
        </div>
      </main>
    </div>
  );
};

export default EditPlate;
