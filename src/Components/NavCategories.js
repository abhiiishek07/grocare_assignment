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
        <CategoryWrapper category={category}>{category}</CategoryWrapper>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: auto;
  height: 6vh;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
`;

const CategoryWrapper = styled.div`
  width: auto;
  height: 3vh;
  background-color: ${(props) =>
    props.category === "All" ? "white" : "#3f3f3f"};
  border-radius: 0.5rem;
  padding: 0.3rem 0.8rem;
  margin: 0.4rem;
  color: ${(props) => (props.category === "All" ? "black" : "white")};
  overflow: hidden;
`;
export default NavCategories;
