import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from "react-redux";
import {
  loadBussinesData,
  setActiveBussines,
} from "../../../../store/actions/dashboard";
const BussinesItem = ({ name, id }) => {
  const dispatch = useDispatch();
  const { activeBussines } = useSelector((state) => state.dashboard);

  const handleItemClick = () => {
    // Si el negocio clickeado es diferente al activo
    if (activeBussines == null || activeBussines.name !== name) {
      dispatch(loadBussinesData({ id, name }));
    }
  };
  return (
    <ListItem
      style={{ margin: "1rem" }}
      disablePadding
      onClick={handleItemClick}
    >
      <ListItemButton style={{ height: "80%", padding: "0" }}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary={false === name ? name.toUpperCase() : name} />
      </ListItemButton>
    </ListItem>
  );
};

export default BussinesItem;
