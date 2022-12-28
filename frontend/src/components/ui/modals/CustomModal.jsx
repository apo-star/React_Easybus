import React, { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { Dialog } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({ open, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomModal;
