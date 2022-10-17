import React, { useReducer } from "react";
import { AuthContext } from "./AuthConetx";

const authReducer = (state, action) => {
  switch (action.type) {
    case "[AUTH] Login":
      console.log(`3 Action: ${action}`);
      return {
        ...action.payload,
      };

    case "[AUTH] Logout":
      return {};

    default:
      return state;
  }
};

const AuhtProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {});
  return (
    <AuthContext.Provider value={{ state,dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuhtProvider;
