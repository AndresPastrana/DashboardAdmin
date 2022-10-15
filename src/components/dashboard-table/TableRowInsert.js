import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TableRowInsert = () => {
  //States
  const insertState = React.useState({
    name: "",
    description: "",
    price: 0,
  });

  //   Data from the states
  const [value, setValue] = insertState;
  const { name, description, price } = value;

  //   Handlers
  const onInputChange = (e) => {
    return setValue({ ...value, [e.target.name]: e.target.value });
  };

  
  return (
    <TableRow>
      <TableCell>
        <input
        
         className="input"
         placeholder="Name"
          value={name}
          name="name"
          onChange={onInputChange}
          type="text"
        />
      </TableCell>
      <TableCell>
        <input
         className="input"
         placeholder="Description"
          value={description}
          name="description"
          onChange={onInputChange}
          type="text"
        />
      </TableCell>
      <TableCell>
        <input
         className="input"
         placeholder="Price"
          value={price}
          name="price"
          onChange={onInputChange}
          type="number"
        />
      </TableCell>
      <TableCell>
        <Button size="small" variant="outlined" fullWidth endIcon={<AddIcon />}>
          ADD
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowInsert;
