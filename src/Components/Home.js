import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import OpenSidebar from "./OpenSidebar";
import NavCategories from "./NavCategories";
function Home() {
  const isSidebarOpen = useSelector((state) => state.sidebar);
  //   useEffect(() => {
  //     fetchVideos();
  //   }, []);

  // const fetchVideos = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://internship-service.onrender.com/videos?page=7`
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //   }
  // };
  return (
    <>
      <Navbar />
      <Wrapper>
        {isSidebarOpen ? <OpenSidebar /> : <Sidebar />}

        <NavCategories />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  background-color: #0f0f0f;
  width: 100%;
  height: auto;
  /* display: inline-block; */
  display: flex;
`;
const SidebarWrapper = styled.div`
  /* width: 30%; */
  /* float: left; */
  /* display: inline-block; */
  flex-grow: 1;
`;
const CategoriesWrapper = styled.div`
  background-color: pink;
  /* width: 80%; */
  height: 10vh;
  /* margin-left: 5rem; */
  /* float: right; */
  /* display: inline-block; */
  flex-grow: 1;
`;
export default Home;
