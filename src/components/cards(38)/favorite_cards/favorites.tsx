import React, { useContext, useState, useEffect } from "react";
import { OneCardType } from "../one_card_page/one_card_page";
import { Card } from "../arrayWidthCards";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BidSpinner } from "../../spinners/spinners";
import { FilterContext } from "../../providers/filterProvider";
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
  const [arrayCards, setArrayCards] = useState<any[]>([]); /// массив куда складывать карточки

  const contextFilter = useContext(FilterContext);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    const moviesInStorage: string[] = favorites ? JSON.parse(favorites) : [];

    moviesInStorage.forEach((element: any) => {
      setIsLoading(true);
      fetch(`http://www.omdbapi.com/?apikey=122eac9b&plot=full&i=${element}`)
        .then((responce) => responce.json())
        .then(
          (data: OneCardType) => {
            if (data.Type == contextFilter.filterValue) {
              setArrayCards((prev) => {
                const isIncluded =
                  prev.findIndex(({ imdbID }) => imdbID === data.imdbID) !== -1;
                if (isIncluded) return prev;

                return [...prev, data];
              });
            } else if (contextFilter.filterValue === "") {
              setArrayCards((prev) => {
                const isIncluded =
                  prev.findIndex(({ imdbID }) => imdbID === data.imdbID) !== -1;
                if (isIncluded) return prev;

                return [...prev, data];
              });
            }
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
  }, [contextFilter.filterValue]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (isLoading) {
    return <BidSpinner />;
  }

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
