import React from "react";

import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import DashboardTable from "../../components/dashboard-table/DashboardTable";
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";
import SearchBar from "../../components/header/searchBar/SearchBar";
const DashboardView = () => {
  return (
    <div className="container">
      <SideBar />
      <main>
        <Header />
        <div className="body">
          <div style={{ display:'flex', justifyContent:'space-between', paddingRight:'5px',marginBottom:'20px',alignItems:'center'}}>
         <SearchBar/>
          <Button size="medium" variant="contained" color="success"  endIcon={<Save/>}>Save Changes</Button>
          </div>
          <DashboardTable />
        </div>
      </main>
    </div>
  );
};

export default DashboardView;

