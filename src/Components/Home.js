import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import OpenSidebar from "./OpenSidebar";
import NavCategories from "./NavCategories";
import VideosList from "./VideosList";
function Home() {
  const isSidebarOpen = useSelector((state) => state.sidebar);

  return (
    <>
      <Navbar />
      <Wrapper>
        {isSidebarOpen ? <OpenSidebar /> : <Sidebar />}
        <div>
          <NavCategories />
          <VideosList />
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  background-color: #0f0f0f;
  /* background-color: aliceblue; */
  width: auto;
  height: auto;
  /* display: inline-block; */
  display: flex;
  flex-grow: 1;
`;
// const SidebarWrapper = styled.div`
//   /* width: 30%; */
//   /* float: left; */
//   /* display: inline-block; */
//   flex-grow: 1;
// `;
// const CategoriesWrapper = styled.div`
//   background-color: pink;
//   /* width: 80%; */
//   height: 10vh;
//   /* margin-left: 5rem; */
//   /* float: right; */
//   /* display: inline-block; */
//   flex-grow: 1;
// `;
export default Home;
