import React, { useEffect, useState } from "react";
import { Post } from "./oneCard";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../pagination/paginationBlock";

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

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=122eac9b&s=mad&page=${currentPage}`)
      .then((responce) => responce.json())
      .then(
        (data: any) => {
          setCards(data.Search);
          setcardsTotal(+data.totalResults);
          // console.log(cardsTotal);
          setIsLoading(false);
        },
        (error: Error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [currentPage]);
  // console.log(cards);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
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
