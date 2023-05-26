import React from "react";
import styled from "styled-components";
function Loading() {
  return <Wrapper>Loading ...</Wrapper>;
}
const Wrapper = styled.div`
  background-color: #0f0f0f;
  min-height: 93vh;
  width: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default Loading;
