import React from "react";
import styled from "styled-components";
import "../../fonts/Exo_2/fontStyles.css";
import "./cardStyles.css";

const CardWrapper = styled.div`
  width: 266px;
  height: 400px;
  margin: 40px 0;
  cursor: pointer;
`;

const PosterWrapper = styled.div`
  width: 260px;
  height: 370px;
  border-radius: 20px;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const ImdbRatingWrapper = styled.div<{ isHightRating: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${({ isHightRating }) => (isHightRating ? "green" : "red")};
  padding: 2px 8px;
  position: absolute;
  left: 7.52%;
  right: 78.57%;
  top: 4.62%;
  bottom: 88.91%;
  border-radius: 6px;
  font-family: Exo2-Regular;
  color: #ffffff;
`;

const PostTitle = styled.h2`
  font-family: Exo2-Bold;
  font-size: 16px;
  color: #ffffff;
`;
const PostGenres = styled.p`
  font-family: Exo2-Regular;
  font-size: 16px;
  color: #ffffff;
`;

export function Post(props: any) {
  return (
    <CardWrapper className="oneCard">
      <PosterWrapper style={{ backgroundImage: `url(${props.poster})` }}>
        <ImdbRatingWrapper isHightRating={props.imdbRating > 6 ? true : false}>
          {props.imdbRating}
        </ImdbRatingWrapper>
      </PosterWrapper>
      <PostTitle>{props.postTitle}</PostTitle>
      <PostGenres>{props.postGenres}</PostGenres>
    </CardWrapper>
  );
}
