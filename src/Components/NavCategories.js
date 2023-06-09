import React from "react";
import styled from "styled-components";
function NavCategories() {
  const categories = [
    "All",
    "Mixes",
    "Train",
    "Coding",
    "Vlogs",
    "IPL",
    "News",
    "Bike Ride",
    "Gaming",
    "Programmig",
    "Go lang",
    "Tourism",
    "Code",
    "Chicken",
    "Cooking",
    "Share",
  ];
  return (
    <Wrapper>
      {categories.map((category) => (
        <CategoryWrapper className="CategoryWrapper" category={category}>
          {category}
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 6vh;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  overflow: hidden;
  @media screen and (min-width: 761px) {
    width: 40;
    font-size: 15px;
    .CategoryWrapper {
      padding: 0.3rem 1rem;
    }
  }

  @media screen and (max-width: 760px) {
    /* width: 100%; */
    width: 20%;
    font-size: 10px;
    .CategoryWrapper {
      padding: 0.3rem 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 35%;
    font-size: 7px;
    .CategoryWrapper {
      padding: 0.3rem 1rem;
    }
  }

  @media screen and (max-width: 360px) {
    width: 30%;
    font-size: 7px;
    .CategoryWrapper {
      padding: 0.3rem 1rem;
    }
  }
`;

const CategoryWrapper = styled.div`
  width: auto;
  height: 3vh;
  background-color: ${(props) =>
    props.category === "All" ? "white" : "#3f3f3f"};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
  padding: 0.3rem 1rem;
  color: ${(props) => (props.category === "All" ? "black" : "white")};
  overflow: hidden;
`;
export default NavCategories;
