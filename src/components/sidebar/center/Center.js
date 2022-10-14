import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import Category from "./Category";
import { Paper } from "@mui/material";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="center">
      <Paper style={{maxHeight: 545, overflow: 'auto'}}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Dashboard
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Category categoryIcon={"food"} categoryName={"Food"} />
            <Category categoryIcon={"drink"} categoryName={"Drink"} />
            <Category categoryIcon={"infusions"} categoryName={"Infusions"} />
            <Category categoryIcon={"food"} categoryName={"Food"} />
            <Category categoryIcon={"drink"} categoryName={"Drink"} />
            <Category categoryIcon={"infusions"} categoryName={"Infusions"} />
            <Category categoryIcon={"food"} categoryName={"Food"} />
            <Category categoryIcon={"drink"} categoryName={"Drink"} />
            <Category categoryIcon={"infusions"} categoryName={"Infusions"} />
            <Category categoryIcon={"food"} categoryName={"Food"} />
            <Category categoryIcon={"drink"} categoryName={"Drink"} />
            <Category categoryIcon={"infusions"} categoryName={"Infusions"} />
          </List>
        </Collapse>
      </List>
      </Paper>
      
    </div>
  );
}
