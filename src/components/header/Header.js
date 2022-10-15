import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";

import SearchBar from "./searchBar/SearchBar";
import ModalAddBussines from "./modalAddBussines/ModalAddBussines";

const Header = () => {
  return (
    <div className="header">
      <h1>Admin Panel</h1>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          style={{ overflowX: "auto", maxWidth: "600px", borderRadius: "50%" }}
        >
          <List
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ListItem style={{ margin: "1rem" }} disablePadding>
              <ListItemButton style={{ height: "80%", padding: "0" }}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Pettit" />
              </ListItemButton>
            </ListItem>
            <ListItem style={{ margin: "1rem" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Pettit" />
              </ListItemButton>
            </ListItem>
            <ListItem style={{ margin: "1rem" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Pettit" />
              </ListItemButton>
            </ListItem>
            <ListItem style={{ margin: "1rem" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Pettit" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <ModalAddBussines/>
      </div>

    </div>
  );
};

export default Header;
