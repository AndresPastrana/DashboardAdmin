import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import TableRowInsert from "./TableRowInsert";
import TableRowInputEditable from "./TableRowInputEditable";
const DashboardTable = () => {
  const subcategoryActive = null;
  // temporary
  const data = [
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
    // TODO: Si no hay ninguna subcategoria activa mostrar una vista informativa
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "70vh", marginTop: "20px" }}>
        {subcategoryActive && (
          <Table className="table">
            <TableHead>
              <TableRow>
                {keys.map((theadText) => (
                  <TableCell key={theadText}>
                    {theadText.toUpperCase()}
                  </TableCell>
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
        )}
      </TableContainer>
    </Paper>
  );
};

export default DashboardTable;
