import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import DashboardView from "../pages/dashboard/DashboardView";
import { AuthContext } from "../context/Auth/AuthContext";

const AppRoutes = () => {
  const {state} = useContext(AuthContext)

  const isLogged = state.token;
  console.log(isLogged);

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              !isLogged ? <Login /> : <Navigate to="dashboard" replace={true} />
            }
          />
          <Route path="dashboard">
            <Route index element={isLogged ? <DashboardView /> :<Navigate to='/'/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
