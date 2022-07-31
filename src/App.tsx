import React from "react";

import { RenderHeader } from "./components/header(37-3)/headerRender";

import { RenderRegistrationPage } from "./components/authorizationPage(38-39)/input";
import { Posts } from "./components/cards(38)/cardsPage";

function App() {
  return (
    <div className="App">
      <RenderHeader />
      <div
        className="contentWrapper"
        style={{
          backgroundColor: "#000000",
          width: "100%",
          height: "100%",
          minHeight: "1200px",
        }}
      >
        {/* <RenderRegistrationPage /> */}

        <Posts />
      </div>
    </div>
  );
}

export default App;
