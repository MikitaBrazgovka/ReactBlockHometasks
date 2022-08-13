import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./cardType";
import { Post } from "./oneCard";
import { CardsArray } from "./arrayWidthCards";
// import { OneCardPageDescript } from "./one_card_page/one_card_page";

import { CardDescriptionPage } from "./one_card_page/one_card_page";

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
      {/* <CardDescriptionPage /> */}

      <CardsArray />
    </PostsContainer>
  );
}
