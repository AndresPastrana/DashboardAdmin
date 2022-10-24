import Types from "../types/Types";

const initialState = {
  bussines: [],
  activeBussines: null,
  activeSubcategory: null,
  categories: [],
  loading: true,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setBussines:
      return { ...state, bussines: action.payload };

    case Types.setActiveBussines:
      console.log(action);
      return {
        ...state,
        activeBussines: action.payload,
      };

    case Types.setCategories:
      return {
        ...state,
        categories: action.payload,
      };

    case Types.setActiveSubcategory:
      console.log("Active Subcatgeory");
      console.log(action);
      return {
        ...state,
        activeSubcategory: action.payload,
      };

    case Types.addBussines:
      return {
        ...state,
        bussines: [...state.bussines, action.payload],
      };
    case Types.deleteBussines:
      const id = action.payload.id;
      return {
        ...state,
        bussines: [...state.bussines.filter((bussines) => bussines.id !== id)],
      };

    case Types.startDashboardLoading:
      return {
        ...state,
        loading: true,
      };

    case Types.stopDashboardLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
