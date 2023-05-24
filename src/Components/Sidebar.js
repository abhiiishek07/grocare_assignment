import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import IconButton from "@mui/material/IconButton";
function Sidebar() {
  return (
    <Wrapper>
      <IconButton>
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
  height: 95vh;
  width: 4.8%;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
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
