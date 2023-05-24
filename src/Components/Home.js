import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import OpenSidebar from "./OpenSidebar";
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
    <div>
      <Navbar />
      {isSidebarOpen ? <OpenSidebar /> : <Sidebar />}
    </div>
  );
}

export default Home;
