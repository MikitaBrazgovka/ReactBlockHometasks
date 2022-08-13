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
          console.log(data);
          setIsLoading(false);
        },
        (error: Error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);
  console.log(cards);
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

// export function Post({ imdbRating,postTitle, postGenres, poster }: Card) {
//   return (
//     <CardWrapper>
//       <PosterWrapper style={{ backgroundImage: `url(${poster})` }}>
//         <ImdbRatingWrapper isHightRating={imdbRating > 6 ? true : false}>
//           {imdbRating}
//         </ImdbRatingWrapper>
//       </PosterWrapper>
//       <PostTitle>{postTitle}</PostTitle>
//       <PostGenres>{postGenres}</PostGenres>
//     </CardWrapper>
//   );
// }

// export const Cards = [
//   {
//     Title: "The Godfather",
//     Year: "1972",
//     Rated: "R",
//     Released: "24 Mar 1972",
//     Runtime: "175 min",
//     Genre: "Crime, Drama",
//     Director: "Francis Ford Coppola",
//     Writer: "Mario Puzo, Francis Ford Coppola",
//     Actors: "Marlon Brando, Al Pacino, James Caan",
//     Plot: "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
//     Language: "English, Italian, Latin",
//     Country: "United States",
//     Awards: "Won 3 Oscars. 31 wins & 30 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//     Ratings: [
//       { Sourc: "Internet Movie Database", Value: "9.2/10" },
//       { Source: "Rotten Tomatoes", Value: "97%" },
//       { Source: "Metacritic", Value: "100/100" },
//     ],
//     Metascore: "100",
//     imdbRating: "9.2",
//     imdbVotes: "1,811,155",
//     imdbID: "tt0068646",
//     Type: "movie",
//     DVD: "11 May 2004",
//     BoxOffice: "$136,381,073",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },

//   {
//     Title: "Joker",
//     Year: "2019",
//     Rated: "R",
//     Released: "04 Oct 2019",
//     Runtime: "122 min",
//     Genre: "Crime, Drama, Thriller",
//     Director: "Todd Phillips",
//     Writer: "Todd Phillips, Scott Silver, Bob Kane",
//     Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
//     Plot: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
//     Language: "English",
//     Country: "United States, Canada",
//     Awards: "Won 2 Oscars. 122 wins & 239 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
//     Ratings: [
//       { Source: "Internet Movie Database", Value: "8.4/10" },
//       { Source: "Rotten Tomatoes", Value: "68%" },
//       { Source: "Metacritic", Value: "59/100" },
//     ],
//     Metascore: "59",
//     imdbRating: "8.4",
//     imdbVotes: "1,215,137",
//     imdbID: "tt7286456",
//     Type: "movie",
//     DVD: "03 Oct 2019",
//     BoxOffice: "$335,477,657",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "Saw V",
//     Year: "2008",
//     Rated: "R",
//     Released: "24 Oct 2008",
//     Runtime: "92 min",
//     Genre: "Crime, Horror, Mystery",
//     Director: "David Hackl",
//     Writer: "Patrick Melton, Marcus Dunstan",
//     Actors: "Scott Patterson, Costas Mandylor, Tobin Bell",
//     Plot: "Following Jigsaw's grisly demise, Mark Hoffman is commended as a hero, but Agent Strahm is suspicious, and delves into Hoffman's past. Meanwhile, another group of people are put through a series of gruesome tests.",
//     Language: "English",
//     Country: "United States, Canada",
//     Awards: "1 win & 2 nominations",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZjczOTYxOTktYjJkYy00ZWM2LWEzN2ItNTY1MmI1ZDBiZDU2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     Ratings: [
//       { Source: "Internet Movie Database", Value: "5.8/10" },
//       { Source: "Rotten Tomatoes", Value: "13%" },
//       { Source: "Metacritic", Value: "20/100" },
//     ],
//     Metascore: "20",
//     imdbRating: "5.8",
//     imdbVotes: "124,065",
//     imdbID: "tt1132626",
//     Type: "movie",
//     DVD: "20 Jan 2009",
//     BoxOffice: "$56,746,769",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "It",
//     Year: "2017",
//     Rated: "R",
//     Released: "08 Sep 2017",
//     Runtime: "135 min",
//     Genre: "Horror",
//     Director: "Andy Muschietti",
//     Writer: "Chase Palmer, Cary Joji Fukunaga, Gary Dauberman",
//     Actors: "Bill Skarsgård, Jaeden Martell, Finn Wolfhard",
//     Plot: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
//     Language: "English, Hebrew",
//     Country: "United States, Canada",
//     Awards: "9 wins & 48 nominations",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg",
//     Ratings: [
//       { Source: "Internet Movie Database", Value: "7.3/10" },
//       { Source: "Rotten Tomatoes", Value: "86%" },
//       { Source: "Metacritic", Value: "69/100" },
//     ],
//     Metascore: "69",
//     imdbRating: "7.3",
//     imdbVotes: "528,360",
//     imdbID: "tt1396484",
//     Type: "movie",
//     DVD: "09 Jan 2018",
//     BoxOffice: "$328,874,981",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight Rises",
//     Year: "2012",
//     Rated: "PG-13",
//     Released: "20 Jul 2012",
//     Runtime: "164 min",
//     Genre: "Action, Drama",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer",
//     Actors: "Christian Bale, Tom Hardy, Anne Hathaway",
//     Plot: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
//     Language: "English, Arabic",
//     Country: "United States, United Kingdom",
//     Awards: "Nominated for 1 BAFTA Award39 wins & 103 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
//     Ratings: [
//       { Source: "Internet Movie Database", Value: "8.4/10" },
//       { Source: "Rotten Tomatoes", Value: "87%" },
//       { Source: "Metacritic", Value: "78/100" },
//     ],
//     Metascore: "78",
//     imdbRating: "8.4",
//     imdbVotes: "1,667,060",
//     imdbID: "tt1345836",
//     Type: "movie",
//     DVD: "04 Dec 2012",
//     BoxOffice: "$448,149,584",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "The Batman",
//     Year: "2022",
//     Rated: "PG-13",
//     Released: "04 Mar 2022",
//     Runtime: "176 min",
//     Genre: "Action, Crime, Drama",
//     Director: "Matt Reeves",
//     Writer: "Matt Reeves, Peter Craig, Bob Kane",
//     Actors: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
//     Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
//     Language: "English, Spanish, Latin, Italian",
//     Country: "United States",
//     Awards: "2 wins & 13 nominations",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
//     Ratings: [
//       { Source: "Internet Movie Database", Value: "7.9/10" },
//       { Source: "Rotten Tomatoes", Value: "85%" },
//       { Source: "Metacritic", Value: "72/100" },
//     ],
//     Metascore: "72",
//     imdbRating: "7.9",
//     imdbVotes: "541,715",
//     imdbID: "tt1877830",
//     Type: "movie",
//     DVD: "19 Apr 2022",
//     BoxOffice: "$369,345,583",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: 6,
//     Year: "2018",
//     Rated: "PG-13",
//     Released: "27 Apr 2018",
//     Runtime: "149 min",
//     Genre: "Action, Adventure, Sci-Fi",
//     Director: "Anthony Russo, Joe Russo",
//     Writer: "Christopher Markus, Stephen McFeely, Stan Lee",
//     Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
//     Plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
//     Language: "English",
//     Country: "United States",
//     Awards: "Nominated for 1 Oscar. 46 wins & 79 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
//     Ratings: [
//       { Source: "Internet Movie Database", Value: "8.4/10" },
//       { Source: "Rotten Tomatoes", Value: "85%" },
//       { Source: "Metacritic", Value: "68/100" },
//     ],
//     Metascore: "68",
//     imdbRating: "8.4",
//     imdbVotes: "1,038,307",
//     imdbID: "tt4154756",
//     Type: "movie",
//     DVD: "14 Aug 2018",
//     BoxOffice: "$678,815,482",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "The Witcher",
//     Year: "2019–",
//     Rated: "TV-MA",
//     Released: "20 Dec 2019",
//     Runtime: "60 min",
//     Genre: "Action, Adventure, Drama",
//     Director: "Tomek Baginski",
//     Writer: "Lauren Schmidt",
//     Actors: "Henry Cavill, Freya Allan, Anya Chalotra",
//     Plot: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
//     Language: "English",
//     Country: "Poland, United States, Hungary",
//     Awards: "Nominated for 3 Primetime Emmys. 5 wins & 21 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
//     Ratings: [{ Source: "Internet Movie Database", Value: "8.2/10" }],
//     Metascore: "N/A",
//     imdbRating: "8.2",
//     imdbVotes: "472,539",
//     imdbID: "tt5180504",
//     Type: "series",
//     totalSeasons: "N/A",
//     Response: "True",
//   },
// ];
