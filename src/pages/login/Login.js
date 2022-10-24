import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { isAuthValid } from "../../helpers/isAuthValid";
import { useDispatch, useSelector } from "react-redux";
import { loginJWT } from "../../store/actions/auth";

const Login = () => {
  //  Hooks and State
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [values, handleOnChange] = useForm({ email: "", password: "" });
  const { email, password } = values;

  // Handlers
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isValid = isAuthValid(email, password);

    if (isValid) {
      dispatch(loginJWT({ ...values }));
    } else {
      Swal.fire({
        icon: "error",
        title: "Ops, somthing went erong!",
        text: "Please fill all the fields",
        timer: 2500,
        showConfirmButton: false,
      });
    }
  };
  return (
    <div className="auth__main">
      <div className="auth__box-container ">
        <form onSubmit={handleOnSubmit}>
          <h1 className="auth__title">Log in</h1>
          <div>
            <input
              className="auth__input"
              name="email"
              type="text"
              value={email}
              placeholder="email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              className="auth__input"
              name="password"
              type="passsword"
              value={password}
              placeholder="passsword"
              onChange={handleOnChange}
            />
          </div>
          <button style={{ backgroundColor: 'darkseagreen', fontWeight:'bold',
        color : `${loading ? 'white' : 'gray'}`}} disabled={loading} type="submit">{loading ? "Loading..." : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// setloading(true);
// const req = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         message: "login succesful",
//         username: "Ray",
//         token: "sdfsgsg",
//         status: "OK",
//       });
//     }, 3000);
//   });
// };

// try {
//   const data = await req();
//   if (data.status === "OK") {
//     dispatch({
//       type: "[AUTH] Login",
//       payload: { token: data.token, username: data.username },
//     });

//     Swal.fire({
//       title: `${data.message}`,
//       text: "I will close in 2 seconds.",
//       timer: 2000,
//     });
//   } else {
//     throw new Error("New Error message");
//   }
// } catch (error) {
//   Swal.fire({
//     title: `Username or passwor incorrect`,
//     text: "Try again",
//     timer: 2000,
//     icon: "error",
//   });
// }
