import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { setSelectedVideo } from "../Store/selectedVideoSlice";
import { useDispatch } from "react-redux";

function VideoCard(props) {
  const { id, name, profile, views, thumbnail, title, pageNum } = props;
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      // selected vide id & page Num by which we'll fetch data in video page
      id: id,
      pageNum: pageNum,
    };
    dispatch(setSelectedVideo(data));
    navigate("/video/" + id);
  };
  return (
    <Wrapper>
      <div className="thumbnailWrapper" onClick={handleClick}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="titleWrapper">
        <div className="profile">
          <img src={profile} alt="user" />
        </div>
        <div className="description">{title}</div>
      </div>
      <div className="userDetail">
        <div className="details">{name}</div>
        <div className="details"> {views} views ▪️ 1 months ago </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 20.5rem;
  height: 41vh;
  background-color: #0f0f0f;
  border-radius: 0.6rem 0.6rem 0 0;
  margin: 1rem;
  .thumbnailWrapper {
    height: 26vh;
    overflow: hidden;
    border-radius: 0.6rem;
    cursor: pointer;
  }
  img {
    max-height: 100%;
    min-width: 100%;
  }
  .titleWrapper {
    height: 6vh;
    width: 100%;
    margin: 0.5rem 0 0;
    display: flex;
  }
  .profile {
    background-color: black;
    width: 15%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
  }
  .description {
    width: 70%;
    color: white;
    display: flex;
    margin-left: 0.5rem;
    font-weight: bold;
    align-items: center;
  }
  .userDetail {
    height: 8vh;
    width: 80%;
    padding: 0;
    margin-left: 3.9rem;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: white;
    justify-content: flex-start;
  }
  .details {
    width: 100%;
    color: #c0c0c0;
    display: flex;
    :hover {
      color: white;
    }
  }
`;
export default VideoCard;
