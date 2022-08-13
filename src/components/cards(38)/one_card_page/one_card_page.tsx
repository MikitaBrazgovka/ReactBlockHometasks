import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PosterWrapper } from "../oneCard";
import BookmarkBtn from "./bookmark.png";
import ShareBtn from "./share.png";
import imdbLogo from "./imdbLogo.png";
import { PostGenres } from "../oneCard";
import "../../../fonts/Exo_2/fontStyles.css";
import { useParams } from "react-router-dom";

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

const Rate = styled.div<{ isHightRating: boolean }>`
  font-family: Exo2-Bold;
  width: 73px;
  height: 28px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  background: ${({ isHightRating }) => (isHightRating ? "green" : "#323537")};
  border-radius: 6px;
  color: #ffffff;
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

//// страница с одной карточкой:

// export function OneCardPageDescript({ obj }: any) {
//   obj = OneCardDescription;
//   return (
//     <PageWrapper>
//       <PosterAndBtnWrapper>
//         <PosterWrapper
//           style={{
//             backgroundImage: `url(${obj.Poster})`,
//           }}
//         ></PosterWrapper>
//         <UnderPosterButtons>
//           <UnderPosterButton>
//             <img src={BookmarkBtn} alt="bookmark" />
//           </UnderPosterButton>
//           <UnderPosterButton>
//             <img src={ShareBtn} alt="bookmark" />
//           </UnderPosterButton>
//         </UnderPosterButtons>
//       </PosterAndBtnWrapper>

//       <DescriptionWrapper>
//         <PostGenres style={{ color: "#AFB2B6", margin: "0" }}>
//           {obj.Genre}
//         </PostGenres>
//         <MainTitleMovie>{obj.Title}</MainTitleMovie>

//         <RateContainer>
//           <Rate isHightRating={obj.imdbRating > 6 ? true : false}>
//             {obj.imdbRating}
//           </Rate>
//           <Rate isHightRating={false}>
//             <img src={imdbLogo} alt="imdb" />
//             {obj.imdbRating}
//           </Rate>
//           <Rate isHightRating={false}>{obj.Runtime}</Rate>
//         </RateContainer>

//         <Plot>{obj.Plot}</Plot>

//         <InfoWrapper>
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <div>Year</div>
//             <div>Released</div>
//             <div>BoxOffice</div>
//             <div>Country</div>
//             <div>Production</div>
//             <div>Actors</div>
//             <div>Director</div>
//             <div>Writers</div>
//           </div>

//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <div>{obj.Year}</div>
//             <div>{obj.Released}</div>
//             <div>{obj.BoxOffice}</div>
//             <div>{obj.Country}</div>
//             <div>{obj.Production}</div>
//             <div>{obj.Actors}</div>
//             <div>{obj.Director}</div>
//             <div>{obj.Writer}</div>
//           </div>
//         </InfoWrapper>
//       </DescriptionWrapper>
//     </PageWrapper>
//   );
// }

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
  const [card, setCard] = useState<any>({});

  let params = useParams();

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
  console.log(card);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Жди...</div>;
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
        <PostGenres style={{ color: "#AFB2B6", margin: "0" }}>
          {card.Genre}
        </PostGenres>
        <MainTitleMovie>{card.Title}</MainTitleMovie>

        <RateContainer>
          <Rate isHightRating={card.imdbRating > 6 ? true : false}>
            {card.imdbRating}
          </Rate>
          <Rate isHightRating={false}>
            <img src={imdbLogo} alt="imdb" />
            {card.imdbRating}
          </Rate>
          <Rate isHightRating={false}>{card.Runtime}</Rate>
        </RateContainer>

        <Plot>{card.Plot}</Plot>

        <InfoWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>Year</div>
            <div>Released</div>
            <div>BoxOffice</div>
            <div>Country</div>
            <div>Production</div>
            <div>Actors</div>
            <div>Director</div>
            <div>Writers</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>{card.Year}</div>
            <div>{card.Released}</div>
            <div>{card.BoxOffice}</div>
            <div>{card.Country}</div>
            <div>{card.Production}</div>
            <div>{card.Actors}</div>
            <div>{card.Director}</div>
            <div>{card.Writer}</div>
          </div>
        </InfoWrapper>
      </DescriptionWrapper>
    </PageWrapper>
  );
}
