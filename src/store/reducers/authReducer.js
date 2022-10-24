import Types from "../types/Types";

const initialState = { token: "", displayName: "" };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.login:
      return { ...action.payload };
    case Types.logout:
      return action.payload ;
    default:
      return state;
  }
};
