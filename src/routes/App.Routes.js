import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import DashboardView from "../pages/dashboard/DashboardView";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="dashboard">
            <Route index element={<DashboardView />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
