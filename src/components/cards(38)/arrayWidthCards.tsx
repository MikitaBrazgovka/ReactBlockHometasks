import React, { useEffect, useState } from "react";

export const Cards = [
  {
    Title: "The Godfather",
    Year: "1972",
    Rated: "R",
    Released: "24 Mar 1972",
    Runtime: "175 min",
    Genre: "Crime, Drama",
    Director: "Francis Ford Coppola",
    Writer: "Mario Puzo, Francis Ford Coppola",
    Actors: "Marlon Brando, Al Pacino, James Caan",
    Plot: "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
    Language: "English, Italian, Latin",
    Country: "United States",
    Awards: "Won 3 Oscars. 31 wins & 30 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Sourc: "Internet Movie Database", Value: "9.2/10" },
      { Source: "Rotten Tomatoes", Value: "97%" },
      { Source: "Metacritic", Value: "100/100" },
    ],
    Metascore: "100",
    imdbRating: "9.2",
    imdbVotes: "1,811,155",
    imdbID: "tt0068646",
    Type: "movie",
    DVD: "11 May 2004",
    BoxOffice: "$136,381,073",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },

  {
    Title: "Joker",
    Year: "2019",
    Rated: "R",
    Released: "04 Oct 2019",
    Runtime: "122 min",
    Genre: "Crime, Drama, Thriller",
    Director: "Todd Phillips",
    Writer: "Todd Phillips, Scott Silver, Bob Kane",
    Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    Plot: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    Language: "English",
    Country: "United States, Canada",
    Awards: "Won 2 Oscars. 122 wins & 239 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.4/10" },
      { Source: "Rotten Tomatoes", Value: "68%" },
      { Source: "Metacritic", Value: "59/100" },
    ],
    Metascore: "59",
    imdbRating: "8.4",
    imdbVotes: "1,215,137",
    imdbID: "tt7286456",
    Type: "movie",
    DVD: "03 Oct 2019",
    BoxOffice: "$335,477,657",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Saw V",
    Year: "2008",
    Rated: "R",
    Released: "24 Oct 2008",
    Runtime: "92 min",
    Genre: "Crime, Horror, Mystery",
    Director: "David Hackl",
    Writer: "Patrick Melton, Marcus Dunstan",
    Actors: "Scott Patterson, Costas Mandylor, Tobin Bell",
    Plot: "Following Jigsaw's grisly demise, Mark Hoffman is commended as a hero, but Agent Strahm is suspicious, and delves into Hoffman's past. Meanwhile, another group of people are put through a series of gruesome tests.",
    Language: "English",
    Country: "United States, Canada",
    Awards: "1 win & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjczOTYxOTktYjJkYy00ZWM2LWEzN2ItNTY1MmI1ZDBiZDU2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "5.8/10" },
      { Source: "Rotten Tomatoes", Value: "13%" },
      { Source: "Metacritic", Value: "20/100" },
    ],
    Metascore: "20",
    imdbRating: "5.8",
    imdbVotes: "124,065",
    imdbID: "tt1132626",
    Type: "movie",
    DVD: "20 Jan 2009",
    BoxOffice: "$56,746,769",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "It",
    Year: "2017",
    Rated: "R",
    Released: "08 Sep 2017",
    Runtime: "135 min",
    Genre: "Horror",
    Director: "Andy Muschietti",
    Writer: "Chase Palmer, Cary Joji Fukunaga, Gary Dauberman",
    Actors: "Bill Skarsgård, Jaeden Martell, Finn Wolfhard",
    Plot: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    Language: "English, Hebrew",
    Country: "United States, Canada",
    Awards: "9 wins & 48 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "86%" },
      { Source: "Metacritic", Value: "69/100" },
    ],
    Metascore: "69",
    imdbRating: "7.3",
    imdbVotes: "528,360",
    imdbID: "tt1396484",
    Type: "movie",
    DVD: "09 Jan 2018",
    BoxOffice: "$328,874,981",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];
