import React, { useEffect, useState, useContext } from "react";
import { Post } from "./oneCard";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../pagination/paginationBlock";
import { SearchContext } from "../providers/searchProvider";
import { BidSpinner } from "../spinners/spinners";

export interface Card {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export function CardsArray() {
  const navigate = useNavigate();
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  const [cardsTotal, setcardsTotal] = useState<any>();
  const [moviesPerPage] = useState<number>(10);
  const [currentPage, setcurrentPage] = useState(1);

  const context = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=122eac9b&s=${context.searchValue}&page=${currentPage}`
    )
      .then((responce) => responce.json())
      .then(
        (data: any) => {
          if (data.Response == "False") {
            alert("Not found");
          } else {
            setCards(data.Search);
            setcardsTotal(+data.totalResults);
          }
          setIsLoading(false);
        },
        (error: Error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [currentPage, context.searchValue]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (isLoading) {
    return <BidSpinner />;
  }

  if (!context) return null;

  const paginate = (currentPage: number) => setcurrentPage(currentPage);

  return (
    <>
      {cards.map((card: Card) => (
        <Post
          imdbID={card.imdbID}
          key={card.imdbID}
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

      <Pagination
        currentPage={currentPage}
        cardsTotal={cardsTotal}
        moviesPerPage={moviesPerPage}
        paginate={paginate}
      />
    </>
  );
}
