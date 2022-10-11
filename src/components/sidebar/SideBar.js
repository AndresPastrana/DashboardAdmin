import React from "react";
import Bottom from "./bottom/Bottom";
import Center from "./center/Center";
import Top from "./top/Top";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Top />
      <hr />
      <Center />\
      <hr />
      <Bottom />
    </div>
  );
};

export default SideBar;
