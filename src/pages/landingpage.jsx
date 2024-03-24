import React, { useState } from "react";
import Button from "@mui/material/Button";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import gmeetimage from '../images/download.png'
import VideoComponent from "../components/video";
import FormDialog from "../components/popup";
import VideoComponent1 from "../components/video";

import TextField1 from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function LandingPage() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCreateRoom = () => {
    // Add your logic for creating a room here
    return <>
      <FormDialog></FormDialog>
    </>
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100vh",
            marginTop: '15px',
            marginLeft: '15px'
          }}
        >
          <img
            src={gmeetimage}
            alt="Google Meet Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <div style={{ flex: 1, fontSize: "40px" }}>Google Meet</div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div style={{ display: "flex", flex: 10 }}>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "50px",
                marginTop: "150px",
                marginLeft: "50px",
              }}
            >
              Video Calls and Meetings for everyone
            </h1>
            <h2 style={{ marginLeft: "50px" }}>
              Google Meet provides secure, easy-to-use video calls and meetings
              for everyone, on any device.
            </h2>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
              <FormDialog></FormDialog>
              <TextField
                style={{ marginLeft: "20px", height: "56px" }}
                placeholder="Enter Room Code"
                value={text}
                export text
                onChange={handleTextChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyboardIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <React.Fragment>
      <Button 
      disabled={text.trim() === ""}
      style={{ height:'56px',fontSize:'16px',borderRadius:'28px',marginLeft:'15px'}} variant="contained" onClick={handleClickOpen}>
        Join 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: '500px', // Adjust the width as needed
          },
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Join Meeting</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Your Name
          </DialogContentText>
          <TextField1
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            placeholder="Type here"
            
            fullWidth
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Join</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <VideoComponent1 />
          </div>
        </div>
      </div>

    </>
  );
}
