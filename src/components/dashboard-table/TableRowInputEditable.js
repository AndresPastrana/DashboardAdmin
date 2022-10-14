import React, { useEffect, useRef, useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TableRowInputEditable = ({ data }) => {
  //  States

  const [rowValues, setrowValues] = useState({ ...data, flag: null });
  // Saving the reference to te original value
  const prev = useRef(rowValues);

  // Destructured Data
  const { id, name, description, price, flag } = rowValues;

  // Handlers
  const handleDelete = (id) => {
    console.log(id);
  };

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setrowValues({ ...rowValues, [name]: value });
  };

  const hanldeOnBlur = (e) => {
    // Just update the store when we click in another element that is not within the current row and if the values are not the same
    if (
      e.relatedTarget === null ||
      prev.current.id !==
        Number(e.relatedTarget.parentNode.parentNode.dataset.id)
    ) {
      // Si algunos de los campos estan vacios, reseteo el formulario con el valor anterior
      if (name === "" || description === "" || price === "") {
        alert("Empty Fields");
        setrowValues({ ...prev.current });
      } else {
        // Check the the current value are not the same that the current row
        if (JSON.stringify(rowValues) !== JSON.stringify(prev.current)) {
          console.log("Updated state...");

          //  TODO: Update the sotre

          // We update the current refernce of the element
          prev.current = { ...rowValues };
        }
      }
    }
  };
  return (
    // We  create a unique id for Each Row
    <TableRow data-id={id}>
      <TableCell>
        <input
          className="input"
          name="name"
          value={name}
          type="text"
          onChange={handleOnInputChange}
          onBlur={hanldeOnBlur}
        />
      </TableCell>
      <TableCell>
        <input
          className="input"
          name="description"
          value={description}
          type="text"
          onChange={handleOnInputChange}
          onBlur={hanldeOnBlur}
        />
      </TableCell>
      <TableCell>
        <input
          className="input"
          name="price"
          value={price}
          type="number"
          onChange={handleOnInputChange}
          onBlur={hanldeOnBlur}
        />
      </TableCell>
      <TableCell>
        <Button
          endIcon={<DeleteForeverIcon />}
          variant="contained"
          color="error"
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRowInputEditable;
