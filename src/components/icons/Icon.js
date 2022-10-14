import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

const Icon = ({ icon }) => {
  const iconsMap = new Map();

  iconsMap.set("category", <CategoryIcon />);
  iconsMap.set("food", <RestaurantMenuOutlinedIcon />);
  iconsMap.set("drink", <LocalBarIcon />);
  iconsMap.set("infusions", <EmojiFoodBeverageIcon />);
  

  return iconsMap.get(icon);
};

export default Icon;
