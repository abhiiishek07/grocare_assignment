import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";

import Loading from "./Loading";
function VideosList() {
  const [pageNum, setPageNum] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("videolist", videoList);
  const handlePageChange = (event, value) => {
    setPageNum(value - 1);
  };
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${pageNum}`
      );
      setLoading(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>
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
                    creator_handle={video.creator.handle}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
      <PaginationWrapper>
        <Stack spacing={2}>
          <Pagination
            count={10}
            page={pageNum + 1}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            sx={{ button: { color: "#ffffff" }, color: "#ffffff" }}
          />
        </Stack>
      </PaginationWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #0f0f0f;
  min-height: 93vh;
  width: auto;
  @media screen and (max-width: 480px) {
    width: 40%;
  }
`;
const PaginationWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  @media screen and (min-width: 761px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 760px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export default VideosList;
