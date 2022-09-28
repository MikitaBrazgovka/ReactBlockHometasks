import React, { useContext, useState, useEffect } from "react";
import { OneCardType } from "../one_card_page/one_card_page";
import { Card } from "../arrayWidthCards";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Post } from "../oneCard";

const PostsContainer = styled.div`
  max-width: 1490px;
  margin: 0px 85px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

export function FavoriteCardsArray() {
  const navigate = useNavigate();
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState<OneCardType | null>(null); /// объект для каждой карточки
  const [arrayCards, setArrayCards] = useState<any[]>([]); /// массив куда складывать карточки

  const [cardsTotal, setcardsTotal] = useState<any>();
  const [moviesPerPage] = useState<number>(10);
  const [currentPage, setcurrentPage] = useState(1);

  // const context = useContext(SearchContext);

  // const locals = JSON.parse(localStorage.getItem("favorites"));

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    const moviesInStorage: string[] = favorites ? JSON.parse(favorites) : [];

    moviesInStorage.forEach((element: any) => {
      setIsLoading(true);
      fetch(`http://www.omdbapi.com/?apikey=122eac9b&plot=full&i=${element}`)
        .then((responce) => responce.json())
        .then(
          (data: OneCardType) => {
            // setCard(data);

            setArrayCards((prev) => {
              const isIncluded =
                prev.findIndex(({ imdbID }) => imdbID === data.imdbID) !== -1;
              if (isIncluded) return prev;

              return [...prev, data];
            });

            setIsLoading(false);
          },
          (error: Error) => {
            setIsLoading(false);

            setError(error);
          }
        );
    });

    return () => {
      setArrayCards([]);
      console.log("unmount");
    };
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (isLoading) {
    return <div style={{ color: "white" }}>Загрузка...</div>;
  }

  //  if (!context) return null;

  //  const paginate = (currentPage: number) => setcurrentPage(currentPage);

  console.log("arrayCards", arrayCards);

  return (
    <>
      {arrayCards.map((card) => (
        <Post
          key={card.imdbID}
          imdbID={card.imdbID}
          postTitle={card.Title}
          postGenres={card.Type}
          poster={card.Poster}
          postYear={card.Year}
          imdbRating={7.4}
          onClick={() => {
            navigate(`${card.imdbID}`);
          }}
        />
      ))}

      {/* <Pagination
        currentPage={currentPage}
        cardsTotal={cardsTotal}
        moviesPerPage={moviesPerPage}
        paginate={paginate}
      /> */}
    </>
  );
}

export function FavoritePosts() {
  return (
    <PostsContainer>
      <FavoriteCardsArray />
    </PostsContainer>
  );
}
