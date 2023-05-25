import React from "react";
import styled from "styled-components";

function VideoCard(props) {
  const { id, name, profile, views, thumbnail, description, videoLink, title } =
    props;
  return (
    <Wrapper>
      <div className="thumbnailWrapper">
        <img src={props.thumbnail} alt="thumbnail" />
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
  /* background-color: red; */
  background-color: #0f0f0f;
  border-radius: 0.6rem 0.6rem 0 0;
  margin: 1rem;
  .thumbnailWrapper {
    height: 26vh;
    /* background-color: blue; */
    overflow: hidden;
    border-radius: 0.6rem;
    cursor: pointer;
  }
  img {
    max-height: 100%;
    min-width: 100%;
  }
  .titleWrapper {
    /* background-color: brown; */
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
    /* background-color: yellow; */
    width: 70%;
    color: white;
    display: flex;
    margin-left: 0.5rem;
    font-weight: bold;
    align-items: center;
    /* flex-direction: ; */
  }
  .userDetail {
    /* background-color: darkblue; */
    height: 8vh;
    width: 80%;
    padding: 0;
    margin-left: 3.9rem;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: white;
    justify-content: flex-start;

    /* flex-direction: start; */
  }
  .details {
    /* background-color: yellow; */
    width: 100%;
    color: #c0c0c0;
    display: flex;
    :hover {
      color: white;
    }
  }
`;
export default VideoCard;
