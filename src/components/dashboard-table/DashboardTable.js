import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TableRowInsert from "./TableRowInsert";
import TableRowInputEditable from "./TableRowInputEditable";
const DashboardTable = () => {
  // temporary
  const data = [
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: 1,
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: 2,
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
    {
      name: "value",
      description: "This is a good product",
      price: 10,
      id: Math.random(),
    },
  ];
  const keys = Object.keys(data[0]);
  const id = keys.indexOf("id");
  if (id > -1) {
    keys.splice(id, 1);
  }
  console.log(keys);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "70vh", marginTop: "20px" }}>
        <Table className="table">
          <TableHead>
            <TableRow>
              {keys.map((theadText) => (
                <TableCell key={theadText}>{theadText.toUpperCase()}</TableCell>
              ))}
              <TableCell>CHANGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRowInsert />
            {data.map((plate) => (
              <TableRowInputEditable key={plate.id} data={plate} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DashboardTable;
