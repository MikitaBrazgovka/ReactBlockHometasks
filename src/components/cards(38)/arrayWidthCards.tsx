import React, { useEffect, useState } from "react";
import { Post } from "./oneCard";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

interface Card {
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

  useEffect(() => {
    setIsLoading(true);
    fetch("http://www.omdbapi.com/?apikey=122eac9b&s=mad")
      .then((responce) => responce.json())
      .then(
        (data: any) => {
          setCards(data.Search);
          // console.log(data);
          setIsLoading(false);
        },
        (error: Error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);
  // console.log(cards);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {cards.map((card: Card) => (
        <Post
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
    </>
  );
}
