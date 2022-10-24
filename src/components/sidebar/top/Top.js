import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/auth";

const Top = () => {
  const dispatch = useDispatch();
  const displayName = useSelector((state) => state.auth.displayName);

  const handleLogut = () => {
    dispatch(logout());
  };
  return (
    <div className="top">
      <div>
        <Avatar className="avatar">{displayName[0]}</Avatar>
      </div>

      <div className="text">{displayName.toLocaleUpperCase()}</div>
      <div className="btn_logout" onClick={handleLogut}>
        <LogoutIcon />
      </div>
    </div>
  );
};

export default Top;
