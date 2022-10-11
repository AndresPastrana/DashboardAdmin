import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div style={{ margin: '5px' }}>Image</div>
        <div style={{ margin: '5px' }}>Name</div>
        <div style={{ margin: '5px' }}>
          <button>log out</button>
        </div>
      </div>
      <hr/>
      <div className="center">
      <div>A</div>
      <div>A</div>
      <div>A</div>

      </div>
      <div className="bottom">Theme</div>
    </div>
  );
};

export default SideBar;
