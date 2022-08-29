import React from "react";
import styled from "styled-components";
import { CardsArray } from "./arrayWidthCards";
import { Navigate } from "react-router-dom"; //// для авторизации

const PostsContainer = styled.div`
  max-width: 1490px;
  margin: 0px 85px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

export function Posts() {
  return (
    <PostsContainer>
      <CardsArray />
    </PostsContainer>
  );
}
