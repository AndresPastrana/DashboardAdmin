import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import TapasIcon from "@mui/icons-material/Tapas";
import FiberNew from "@mui/icons-material/FiberNew";
const Icon = ({ icon }) => {
  const iconsMap = new Map();

  iconsMap.set("category", <CategoryIcon />);
  iconsMap.set("tapas", <TapasIcon />);
  iconsMap.set("new", <FiberNew />);
  iconsMap.set("food", <RestaurantMenuOutlinedIcon />);
  iconsMap.set("drink", <LocalBarIcon />);
  iconsMap.set("infusions", <EmojiFoodBeverageIcon />);

  return iconsMap.get(icon);
};

export default Icon;
