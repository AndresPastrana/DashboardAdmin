import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar/Avatar";
const Top = () => {
  const user = {
    displayname: "Andres",
  };
  const handleLogut = () => {
    console.log("Login out .....");
  };
  return (
    <div className="top">
      <div>
        <Avatar className="avatar">{user.displayname[0]}</Avatar>
      </div>

      <div className="text">{user.displayname.toLocaleUpperCase()}</div>
      <div className="btn_logout" onClick={handleLogut}>
        <LogoutIcon />
      </div>
    </div>
  );
};

export default Top;
