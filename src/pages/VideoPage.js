import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import OpenSidebar from "../Components/OpenSidebar";
import styled from "styled-components";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loading from "../Components/Loading";
import axios from "axios";
function VideoPage() {
  const isSidebarOpen = useSelector((state) => state.sidebar);
  const selectedVideo = useSelector((state) => state.selectedVideo);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [open, setOpen] = React.useState(false);
  const [playing, setPlaying] = useState(true);

  const handleClick = () => {
    setPlaying(!playing);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${selectedVideo.pageNum}`
      );
      let filteredUser = response.data.data.posts.filter((res) => {
        return res.creator.id === selectedVideo.id;
      });
      setUser(filteredUser[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <>
      <Navbar />

      <Wrapper>
        {isSidebarOpen ? <OpenSidebar /> : <Sidebar />}
        {loading ? (
          <div className="video-container">
            <Loading />
          </div>
        ) : (
          <>
            <div className="video-container">
              <VideoWrapper onClick={handleClick}>
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
                <ReactPlayer
                  className="react-player"
                  url={user.submission.mediaUrl}
                  width="100%"
                  height="100%"
                  playing={playing}
                  loop
                  style={{ borderRadius: "1rem" }}
                />
                <p className="title">{user.submission.title}</p>
                <div className="creator-pic">
                  <img src={user.creator.pic} alt="creator" />
                </div>
                <p className="creator-id">@{user.creator.handle}</p>
                <Button className="subscribe-btn" variant="contained">
                  {" "}
                  Subscribe
                </Button>
              </VideoWrapper>
              <div className="functions">
                <IconButton>
                  <div className="btn_wrapper">
                    <ThumbUpIcon style={{ color: "white" }} />
                    <p className="text">3</p>
                  </div>
                </IconButton>
                <IconButton>
                  <div className="btn_wrapper">
                    <ThumbDownIcon
                      style={{ color: "#0f0f0f", stroke: "#ffffff" }}
                    />
                    <p className="text">Dislile</p>
                  </div>
                </IconButton>
                <IconButton>
                  <div className="btn_wrapper">
                    <CommentIcon
                      style={{ color: "#0f0f0f", stroke: "#ffffff" }}
                    />
                    <p className="text">{user.comment.count}</p>
                  </div>
                </IconButton>
                <IconButton>
                  <div className="btn_wrapper">
                    <ShareIcon
                      style={{ color: "#0f0f0f", stroke: "#ffffff" }}
                    />
                    <p className="text">Share</p>
                  </div>
                </IconButton>
                <IconButton onClick={handleClickOpen}>
                  <div className="btn_wrapper">
                    <DescriptionIcon
                      style={{ color: "#0f0f0f", stroke: "#ffffff" }}
                    />
                    <p className="text">Description</p>
                  </div>
                </IconButton>
              </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Description"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {user.submission.description}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </>
        )}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  background-color: #0f0f0f;
  width: auto;
  height: auto;
  display: flex;
  flex-grow: 1;
  .video-container {
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 10px;
    color: white;
  }
  .btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .functions {
    background-color: #0f0f0f;
    height: 83vh;
    display: flex;

    display: flex;
    flex-direction: column;
  }
`;
const VideoWrapper = styled.div`
  width: 24.35%;
  height: 83vh;
  border-radius: 1rem;
  position: relative;
  svg {
    position: absolute;
    top: 50px;
    left: 30px;
    color: white;
  }
  .title {
    position: absolute;
    top: 530px;
    left: 30px;
    color: #ffffff;
    font-weight: bold;
  }
  .creator-pic {
    position: absolute;
    background-color: black;
    width: 12%;
    height: 5vh;
    border-radius: 100%;
    overflow: hidden;
    top: 570px;
    left: 30px;
  }
  img {
    max-height: 100%;
    min-width: 100%;
  }
  .creator-id {
    position: absolute;
    top: 560px;
    left: 75px;
    color: #ffffff;
    font-weight: bold;
  }
  .subscribe-btn {
    position: absolute;
    top: 570px;
    left: 230px;
    color: #0f0f0f;
    background-color: #ffffff;
    border-radius: 1.5rem;
    box-shadow: none;
  }
`;

export default VideoPage;
