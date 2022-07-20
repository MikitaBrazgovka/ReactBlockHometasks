import React from "react";
import logo from "./logo.svg";
import { MainTitle } from "./components/mainTitle(37-1)/mainTitle";
import { HeaderLine } from "./components/header(37-2)/header";
import { OpenedHeader } from "./components/header(37-3)/headerOpened";

function App() {
  return (
    <div className="App">
      <MainTitle content="Trainings" />

      <HeaderLine></HeaderLine>

      <OpenedHeader
        text1="All posts"
        text2="My posts"
        text3="Add posts"
        text4="Log out"
      />
    </div>
  );
}

export default App;
