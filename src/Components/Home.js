import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Home() {
  // cons
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=7`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Home;
