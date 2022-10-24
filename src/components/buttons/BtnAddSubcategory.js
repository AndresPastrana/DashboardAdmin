import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BtnAddSubcategory = () => {
  return (
    <Button
      style={{ width: "100%" }}
      variant="outlined"
      color="success"
      endIcon={<Add />}
    >
      Subcategory
    </Button>
  );
};

export default BtnAddSubcategory;
