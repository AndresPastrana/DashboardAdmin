import React from "react";
import { useDispatch } from "react-redux";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import Modal from "@mui/material/Modal";
import { useForm } from "../../hooks/useForm";
import { Cancel, Send } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { addCategoryBD } from "../../store/actions/dashboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BtnAddCategory = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formState, handleInputChange] = useForm({
    name: "",
  });

  const { name } = formState;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSend = async () => {
    if (name) {
      dispatch(addCategoryBD({ name }));
      setOpen(false);
    } else {
      setOpen(false);
      await Swal.fire({
        icon: "error",
        title: "Empty name!",
        text: "Insert a valid name for the new category",
      });
      setOpen(true);
    }
  };

  return (
    <>
      <Button
        style={{ width: "100%" }}
        variant="outlined"
        color="success"
        onClick={handleOpen}
        endIcon={<Add />}
      >
        Category
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom="20px"
          >
            Insert the name of the bussines
          </Typography>
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            /> */}
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Category Name"
              onChange={handleInputChange}
            />
            <div>
              <Button
                onClick={handleClose}
                color="error"
                startIcon={<Cancel />}
              >
                Cancel
              </Button>
              <Button onClick={handleSend} endIcon={<Send />}>
                Send
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default BtnAddCategory;
