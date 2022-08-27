import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import "../../fonts/Exo_2/fontStyles.css";
import { ThemeContext } from "../providers/themeProvider";
import { OneCardType } from "./one_card_page/one_card_page";

const CardWrapper = styled.div`
  width: 266px;
  height: 400px;
  margin: 40px 0;
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  cursor: pointer;
`;

export const PosterWrapper = styled.div`
  width: 260px;
  height: 370px;
  border-radius: 20px;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const ImdbRatingWrapper = styled.div<{ imdbRating: number | string }>`
  width: 24px;
  height: 24px;
  background-color: ${({ imdbRating }) => {
    if (imdbRating > 8) {
      return "green";
    }
    if (imdbRating > 6) {
      return "rgb(255, 102, 0)";
    }
    return "red";
  }};
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
export const PostGenres = styled.p`
  font-family: Exo2-Regular;
  font-size: 16px;
  color: #ffffff;
`;

//// одна карточка на общей странице:
export function Post(props: any) {
  const context = useContext(ThemeContext);
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState<OneCardType | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=122eac9b&plot=full&i=${props.imdbID}`)
      .then((responce) => responce.json())
      .then(
        (data: OneCardType) => {
          setCard(data);
          setIsLoading(false);
        },
        (error: Error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Жди...</div>;
  }
  if (!card) {
    return <div>No data</div>;
  }
  if (!context) return null;

  return (
    <CardWrapper
      onClick={() => {
        props.onClick();
      }}
    >
      <PosterWrapper style={{ backgroundImage: `url(${props.poster})` }}>
        <ImdbRatingWrapper imdbRating={card.imdbRating}>
          {card.imdbRating}
        </ImdbRatingWrapper>
      </PosterWrapper>
      <PostTitle style={{ color: `${context.themeVariant["textColor"]}` }}>
        {props.postTitle}
      </PostTitle>
      <PostGenres style={{ color: `${context.themeVariant["textColor"]}` }}>
        {props.postGenres}
      </PostGenres>
      <PostGenres style={{ color: `${context.themeVariant["textColor"]}` }}>
        {props.postYear}
      </PostGenres>
    </CardWrapper>
  );
}
