import React from "react";
import styled from "styled-components";
import { CardsArray } from "./arrayWidthCards";

const PostsContainer = styled.div`
  max-width: 1490px;
  margin: 0px 85px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export function Posts() {
  return (
    <PostsContainer>
      <CardsArray />
    </PostsContainer>
  );
}
