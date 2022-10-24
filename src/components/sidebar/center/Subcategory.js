import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSubcategory } from "../../../store/actions/dashboard";
// import { DataContext } from "../../../context/Data/DataContext";

const Subcategory = ({ subcategoryName }) => {
  const dispatch = useDispatch();
  const { activeSubcategory } = useSelector((state) => state.dashboard);
  // States

  const hanldeSubcategoryClick = () => {
    if (activeSubcategory !== subcategoryName) {
      console.log(activeSubcategory);
      console.log(subcategoryName);
      dispatch(setActiveSubcategory(subcategoryName));
    } else {
      dispatch(setActiveSubcategory(null));
    }
  };

  return (
    <ListItemButton onClick={hanldeSubcategoryClick} sx={{ pl: 4 }}>
      <Checkbox checked={activeSubcategory === subcategoryName} />
      <ListItemText primary={subcategoryName} />
    </ListItemButton>
  );
};

export default Subcategory;
