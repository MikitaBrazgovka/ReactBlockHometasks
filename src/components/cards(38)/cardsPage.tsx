import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./cardType";
import { Post } from "./oneCard";
import { Cards } from "./arrayWidthCards";

const PostsContainer = styled.div`
  max-width: 1490px;
  margin: 0px 85px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

export function Posts() {
  return (
    <PostsContainer>
      {Cards.map((el) => (
        <Post
          key={el.imdbID}
          imdbRating={el.imdbRating}
          postTitle={el.Title}
          postGenres={el.Genre}
          poster={el.Poster}
        />
      ))}
    </PostsContainer>
  );
}

fetch("http://www.omdbapi.com/?i=tt1396484&apikey=122eac9b")
  .then((responce) => responce.json())
  .then((data) => {
    console.log(data);
  });

// export const Cardss = () => {
//   fetch("https://studapi.teachmeskills.by/blog/posts/50/")
//     .then((responce) => responce.json())
//     .then((data: Card) => {
//       console.log(data);
//       // return data;
//     });
// };

// console.log(Cardss);

// const onClick = async () => {
//   const data = fetch("https://studapi.teachmeskills.by/blog/posts/50/")
//     .then((responce) => responce.json())
//     .then((data: Card) => {
//       console.log(data);
//       return data;
//     });
// };

// const onClick = async () => {
//   const responce = await fetch("http://www.omdbapi.com/?apikey=[122eac9b]&");
//   const data: Card = await responce.json();

//   console.log("data", data);
// };

// componendDidMount;
// componentDidUpdate;
// componentWillUnmount;

// const makeRequest = async () => {
//   const responce = await fetch(
//     "https://studapi.teachmeskills.by/blog/posts/50/"
//   );
//   const data: Card = await responce.json();
//   return data;
//   console.log("data", data);
// };

// const Books = () => {
//   const [books, setBooks] = useState([]);
//   const [isOpen, setIsOpen] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     console.log("i mounted");
//     setIsLoading(true);
//     makeRequest().then((data) => {
//       setIsLoading(false);
//       setBooks(data);
//     });

//     return () => {
//       console.log("i will unmount");
//     };
//   }, []);

//   useEffect(() => {
//     console.log("i mounted or updated");
//     window.addEventListener();

//     return () => {
//       window.removeEventListener();
//       console.log("i will update");
//     };
//   });

// useEffect(()=> {
//   if(isOpen) {
//     makeRequest();
//   }
// }, [isOpen])

//   return;
//   <>
//     {isLoading && "Loading"}
//     {books.map((book) => (
//       <BookPreview key={book.id} book={book} />
//     ))}
//   </>;
// };

// const Book = ({ book }) => {};

// import React from "react";

// import { RenderHeader } from "./components/header(37-3)/headerRender";

// import { RenderRegistrationPage } from "./components/authorizationPage(38-39)/input";
// import { Cards } from "./components/cards(38)/cards";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <RenderHeader />

//         <RenderRegistrationPage />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// console.log(Cards);
