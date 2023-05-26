import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "../Components/Sidebar";
import OpenSidebar from "../Components/OpenSidebar";
import NavCategories from "../Components/NavCategories";
import VideosList from "../Components/VideosList";
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
  width: auto;
  height: auto;
  display: flex;
  flex-grow: 1;
`;
export default Home;
