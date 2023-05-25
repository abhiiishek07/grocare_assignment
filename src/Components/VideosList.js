import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import VideoCard from "./Cards/VideoCard";
import { Grid } from "@mui/material";
function VideosList() {
  const [pageNum, setPageNum] = React.useState(0);
  const [videoList, setVideoList] = useState([]);
  console.log("videolist", videoList);
  const handlePageChange = (event, value) => {
    setPageNum(value - 1);
  };
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${pageNum}`
      );
      setVideoList(response.data.data.posts);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, [pageNum]);

  return (
    <Wrapper>
      <Grid container>
        {videoList.map((video) => {
          return (
            <Grid item lg={3} md={4} xs={12}>
              <VideoCard
                id={video.creator.id}
                name={video.creator.name}
                profile={video.creator.pic}
                views={video.reaction.count}
                comments={video.comment.count}
                thumbnail={video.submission.thumbnail}
                description={video.submission.description}
                videoLink={video.submission.mediaUrl}
                title={video.submission.title}
              />
            </Grid>
          );
        })}
      </Grid>
      <PaginationWrapper>
        <Stack spacing={2}>
          <Pagination
            count={10}
            page={pageNum + 1}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            sx={{ button: { color: "#ffffff" } }}
          />
        </Stack>
      </PaginationWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* background-color: aliceblue; */
  background-color: #0f0f0f;
  min-height: 93vh;
  width: auto;
`;
const PaginationWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default VideosList;
