import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BtnAddCategory = () => {
  return (
    <Button
      style={{ width: "100%" }}
      variant="outlined"
      color="success"
      endIcon={<Add />}
    >
      Category
    </Button>
  );
};

export default BtnAddCategory;
