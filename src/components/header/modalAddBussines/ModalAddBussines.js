import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, IconButton, TextField } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Cancel, Send } from "@mui/icons-material";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { insertBussinesDB } from "../../../store/actions/dashboard";
import Swal from "sweetalert2";
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

export default function BasicModal() {
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
      dispatch(insertBussinesDB(name));
      setOpen(false);
    } else {
      setOpen(false);
      await Swal.fire({
        title: "Empty name!",
        text: "Insert a valid name for the new bussines",
      });
      setOpen(true);
    }
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        color="primary"
        aria-label="add to shopping cart"
        style={{ paddingBottom: "15px" }}
      >
        <AddCircleOutlineRoundedIcon />
      </IconButton>
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
              placeholder="New Bussines"
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
    </div>
  );
}
