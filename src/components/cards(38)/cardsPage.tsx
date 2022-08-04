import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./cardType";
import { Post } from "./oneCard";
import { Cards, MyComponent } from "./arrayWidthCards";

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
      {/* <MyComponent /> */}
      {Cards.map((el: any) => (
        <Post
          key={el.imdbID}
          imdbRating={el.imdbRating}
          postTitle={el.Title}
          postGenres={el.Genre}
          poster={el.Poster}
        />
      ))}
    </PostsContainer>
  );
}
