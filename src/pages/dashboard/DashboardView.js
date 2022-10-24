import React, { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import DashboardTable from "../../components/dashboard-table/DashboardTable";
import SearchBar from "../../components/header/searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { loadBussinesList } from "../../store/actions/dashboard";
const DashboardView = () => {
  const loading = useSelector((state) => state.dashboard.loading);

  const dispatch = useDispatch();

  console.log("Rendering");
  console.log(loading);
  useEffect(() => {
    dispatch(loadBussinesList);

    // TODO: Cancel the Request
    return () => {};
  }, [dispatch]);

  dispatch(loadBussinesList());
  return (
    <>
      {loading && <h1>Loading...</h1>}

      {!loading && (
        <div className="container">
          <SideBar />
          <main>
            <Header />
            <div className="body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "5px",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <SearchBar />
                <Button
                  size="medium"
                  variant="contained"
                  color="success"
                  endIcon={<Save />}
                >
                  Save Changes
                </Button>
              </div>
              <DashboardTable />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default DashboardView;
