import React, { useEffect, useRef, useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import IconButton from "@mui/material/IconButton";

const VideoComponent1 = () => {
  const videoRef = useRef();
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing the camera: ", error);
      });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoOn) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVideoOn]);

  const toggleMic = () => {
    setIsMicOn((prev) => !prev);
  };

  const toggleVideo = () => {
    setIsVideoOn((prev) => !prev);
  };

  return (
    <>
      {/* <video
        ref={videoRef}
        autoPlay
        muted={!isMicOn}
        playsInline
        style={{ width: "550px", height: "400px", backgroundColor: "black", marginLeft: "50px", marginTop: "100px" }}
      ></video> */}
      <video
     ref={videoRef}
    autoPlay
    muted={!isMicOn}
    playsInline
    style={{
    width: "550px",
    height: "400px",
    backgroundColor:"transparent",
    marginLeft: "50px",
    marginTop: "100px",
    display: isVideoOn ? "block" : "none",
  }}
></video>
<div style={{

width: "550px",
height: "400px",
marginLeft: "50px",
marginTop: "100px",
background:'black',
display: !isVideoOn ? "block" : "none",

}}></div>

      <div style={{ marginLeft: "250px", marginTop: "10px" }}>
        <IconButton
          aria-label="mic"
          size="large"
          style={{
            backgroundColor: isMicOn ? "darkgray" : "red",
            borderRadius: "50%"
          }}
          onClick={toggleMic}
        >
          {isMicOn ? <MicIcon style={{ color: "white" }} /> : <MicOffIcon style={{ color: "white" }} />}
        </IconButton>
        <IconButton
          aria-label="video"
          size="large"
          style={{
            backgroundColor: isVideoOn ? "darkgray" : "red",
            borderRadius: "50%",
            marginLeft: "15px"
          }}
          onClick={toggleVideo}
        >
          {isVideoOn ? <VideocamIcon style={{ color: "white" }} /> : <VideocamOffIcon style={{ color: "white" }} />}
        </IconButton>
      </div>
    </>
  );
};

export default VideoComponent1;
