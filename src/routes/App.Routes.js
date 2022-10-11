import React from "react";
import { Route, Routes } from "react-router-dom";
import EditPlate from "../pages/editPlate/EditPlate";
import ListPlates from "../pages/listPlate/ListPlates";
import NewPlate from "../pages/newPlate/NewPlate";

import Login from "../pages/login/Login";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="plates">
            <Route index element={<ListPlates />} />
            <Route path="edit" element={<EditPlate />} />
            <Route path="new" element={<NewPlate />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
