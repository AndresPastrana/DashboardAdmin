import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import Icon from "../../icons/Icon";
import Subcategory from "./Subcategory";
import BtnAddSubcategory from "../../buttons/BtnAddSubcategory";

const Category = ({ categoryName, categoryIcon, subcategories }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(subcategories);

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <div className="icon__color">
            <Icon icon={categoryIcon} />
          </div>
        </ListItemIcon>
        <ListItemText primary={categoryName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subcategories.map(({ _id, name }) => {
            return <Subcategory key={_id} subcategoryName={name} />;
          })}
          <BtnAddSubcategory />
        </List>
      </Collapse>
    </div>
  );
};

export default Category;
