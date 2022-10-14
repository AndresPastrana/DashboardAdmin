import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import Icon from "../../icons/Icon";

const Category = ({ categoryName, categoryIcon }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
};

export default Category;
