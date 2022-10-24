import React, { useEffect } from "react";
import { List } from "@mui/material";
import ModalAddBussines from "./modalAddBussines/ModalAddBussines";
import BussinesItem from "./List/ListItem/BussinesItem";
import { useSelector } from "react-redux";

const Header = () => {
  const bussines = useSelector((state) => state.dashboard.bussines);
  return (
    <div className="header">
      <h1>Admin Panel</h1>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          style={{
            overflowX: "auto",
            maxWidth: "600px",
            borderRadius: "50%",
          }}
        >
          <List
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {bussines.map(({ _id, name }) => (
              <BussinesItem key={_id} name={name} id={_id} />
            ))}
          </List>
        </div>
        <ModalAddBussines />
      </div>
    </div>
  );
};

export default Header;
