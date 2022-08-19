import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { PosterWrapper } from "../oneCard";
import BookmarkBtn from "./bookmark.png";
import ShareBtn from "./share.png";
import imdbLogo from "./imdbLogo.png";
import { PostGenres } from "../oneCard";
import "../../../fonts/Exo_2/fontStyles.css";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../providers/themeProvider";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  gap: 42px;
`;

const PosterAndBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const UnderPosterButtons = styled.div`
  width: 260px;
  height: 56px;
  display: flex;
  margin: 30px 0;
`;

const UnderPosterButton = styled.button`
  width: 132px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #323537;
  cursor: pointer;
  :hover {
    background-color: rgb(123, 97, 255);
    transition: 0.3s ease-in-out;
  }
`;

const MainTitleMovie = styled.h1`
  font-family: Exo2-Bold;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  margin: 26px 0;
`;

const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Rate = styled.div<{ imdbRating: number | string }>`
  font-family: Exo2-Bold;
  width: 73px;
  height: 28px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;

  background: ${({ imdbRating }) => {
    if (imdbRating > 8) {
      return "green";
    }
    if (imdbRating > 6) {
      return "rgb(255, 102, 0)";
    }
    return "red";
  }};
  border-radius: 6px;
  color: #ffffff;
`;

const RateGrey = styled(Rate)`
  background: grey;
`;

const Plot = styled.p`
  font-family: Exo2-Regular;
  color: #ffffff;
  max-width: 878px;
  margin: 40px 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 878px;
  color: #ffffff;
  font-family: Exo2-Regular;
  gap: 70px;
`;

interface OneCardType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: object[];
  Metascore: string;
  imdbRating: string | number;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

/// запрос подробного описания карточки:
export function CardDescriptionPage() {
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState<OneCardType | null>(null);

  let params = useParams();

  const context = useContext(ThemeContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=122eac9b&plot=full&i=${params.cardId}`
    )
      .then((responce) => responce.json())
      .then(
        (data: OneCardType) => {
          setCard(data);
          // console.log(data);
          setIsLoading(false);
        },
        (error: Error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);
  // console.log(card);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Жди...</div>;
  }
  if (!card) {
    return <div>No data</div>;
  }

  return (
    <PageWrapper>
      <PosterAndBtnWrapper>
        <PosterWrapper
          style={{
            backgroundImage: `url(${card.Poster})`,
          }}
        ></PosterWrapper>
        <UnderPosterButtons>
          <UnderPosterButton>
            <img src={BookmarkBtn} alt="bookmark" />
          </UnderPosterButton>
          <UnderPosterButton>
            <img src={ShareBtn} alt="bookmark" />
          </UnderPosterButton>
        </UnderPosterButtons>
      </PosterAndBtnWrapper>

      <DescriptionWrapper>
        <PostGenres
          style={{ color: `${context.themeVariant["textColor"]}`, margin: "0" }}
        >
          {card.Genre}
        </PostGenres>
        <MainTitleMovie
          style={{ color: `${context.themeVariant["textColor"]}` }}
        >
          {card.Title}
        </MainTitleMovie>

        <RateContainer>
          <Rate imdbRating={card.imdbRating}>{card.imdbRating}</Rate>
          <RateGrey imdbRating={card.imdbRating}>
            <img src={imdbLogo} alt="imdb" />
            {card.imdbRating}
          </RateGrey>
          <RateGrey imdbRating={card.imdbRating}>{card.Runtime}</RateGrey>
        </RateContainer>

        <Plot style={{ color: `${context.themeVariant["textColor"]}` }}>
          {card.Plot}
        </Plot>

        <InfoWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Year
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Released
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              BoxOffice
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Country
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Production
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Actors
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Director
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              Writers
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Year}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Released}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.BoxOffice}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Country}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Production}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Actors}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Director}
            </div>
            <div style={{ color: `${context.themeVariant["textColor"]}` }}>
              {card.Writer}
            </div>
          </div>
        </InfoWrapper>
      </DescriptionWrapper>
    </PageWrapper>
  );
}
