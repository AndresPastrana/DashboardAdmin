import axios from "axios";
import Swal from "sweetalert2";
import Types from "../types/Types";
import { startLoading, stopLoading } from "./ui";

// Async
export const loginJWT = (user) => {
  console.log(process.env.REACT_APP_AUTH);
  console.log(user);
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const resp = await axios.post(process.env.REACT_APP_AUTH, user);
      console.log(resp);
      if (resp.data.token) {
        dispatch(login({ token: resp.data.token, displayName: "Admin" }));
      } else {
    
        Swal.fire({
          icon: "error",
          title: "Ops, somthing went erong!",
          text: resp.data.msg,
          timer: 2500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Ops, somthing went erong!",
        text: error.message,
        timer: 2500,
        showConfirmButton: false,
      });
    }
    dispatch(stopLoading())
  };
};

// Sync
export const login = (user) => {
  console.log(user);
  return {
    type: Types.login,
    payload: { ...user },
  };
};

export const logout = () => {
  return {
    type: Types.logout,
    payload: {},
  };
};
