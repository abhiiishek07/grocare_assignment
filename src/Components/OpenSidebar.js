import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
function OpenSidebar() {
  return (
    <Wrapper>
      <div className="icon_btn">
        <div className="btn_wrapper" style={{ background: "#3F3F3F" }}>
          <div>
            <HomeIcon style={{ color: "white", margin: "0px 30px 0 12px" }} />
          </div>
          <div>
            <p className="text">Home</p>
          </div>
        </div>
      </div>

      <div className="icon_btn">
        <div className="btn_wrapper">
          <MovieCreationIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Shorts</p>
        </div>
      </div>

      <div className="icon_btn">
        <div className="btn_wrapper">
          <VideoLibraryIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Library</p>
        </div>
      </div>

      <hr className="hr" />
      <div className="icon_btn">
        <div className="btn_wrapper">
          <div>
            <HistoryIcon
              style={{
                color: "#0f0f0f",
                stroke: "#ffffff",
                margin: "0px 30px 0 12px",
              }}
            />
          </div>
          <div>
            <p className="text">History</p>
          </div>
        </div>
      </div>

      <div className="icon_btn">
        <div className="btn_wrapper">
          <SmartDisplayIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Your Videos</p>
        </div>
      </div>

      <div className="icon_btn">
        <div className="btn_wrapper">
          <WatchLaterIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Watch Later</p>
        </div>
      </div>
      <div className="icon_btn">
        <div className="btn_wrapper">
          <WhatshotIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Trending</p>
        </div>
      </div>
      <div className="icon_btn">
        <div className="btn_wrapper">
          <MusicNoteIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Music</p>
        </div>
      </div>
      <div className="icon_btn">
        <div className="btn_wrapper">
          <SportsEsportsIcon
            style={{
              color: "#0f0f0f",
              stroke: "#ffffff",
              margin: "0px 30px 0 12px",
            }}
          />
          <p className="text">Gaming</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 100vh;
  /* width: 15%; */
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 761px) {
    width: 15%;
    font-size: 12px;
    color: white;
  }

  @media screen and (max-width: 760px) {
    width: 15%;
    font-size: 12px;
    color: white;
  }

  @media screen and (max-width: 480px) {
    width: 30%;
    font-size: 10px;
    color: white;
  }

  @media screen and (max-width: 360px) {
    width: 35%;
    font-size: 10px;
    color: white;
  }

  .icon_btn {
    margin: 0 10px;
    cursor: pointer;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    /* background-color: red; */
  }
  .btn_wrapper {
    display: flex;
    /* flex-direction: column; */
    /* justify-content: space-evenly; */
    align-items: center;
    /* justify-content: space-around; */
    /* justify-content: ; */
    /* gap: 30px; */
    width: 100%;
    border-radius: 0.5rem;
    height: 5vh;
    /* background-color: red; */
    :hover {
      background-color: #3f3f3f;
    }
  }
  .hr {
    width: 80%;
    border: none;
    height: 0.1px;
    background: whitesmoke;
    /* margin: 2px 0 2px 0; */
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export default OpenSidebar;
