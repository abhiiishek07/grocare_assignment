import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IconButton onClick={() => navigate("/")}>
        <div className="btn_wrapper">
          <HomeIcon style={{ color: "white" }} />
          <p className="text">Home</p>
        </div>
      </IconButton>
      <IconButton>
        <div className="btn_wrapper">
          <MovieCreationIcon style={{ color: "#0f0f0f", stroke: "#ffffff" }} />
          <p className="text">Shorts</p>
        </div>
      </IconButton>
      <IconButton>
        <div className="btn_wrapper">
          <SubscriptionsIcon style={{ color: "#0f0f0f", stroke: "#ffffff" }} />
          <p className="text">Subscriptions</p>
        </div>
      </IconButton>
      <IconButton>
        <div className="btn_wrapper">
          <VideoLibraryIcon style={{ color: "#0f0f0f", stroke: "#ffffff" }} />
          <p className="text">Library</p>
        </div>
      </IconButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 761px) {
    width: 4.8%;
  }

  @media screen and (max-width: 760px) {
    width: 10%;
  }

  @media screen and (max-width: 480px) {
    width: 17%;
  }

  @media screen and (max-width: 360px) {
    width: 20%;
  }
  .text {
    font-size: 10px;
    /* font-weight: ; */
    color: white;
  }
  .btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Sidebar;
