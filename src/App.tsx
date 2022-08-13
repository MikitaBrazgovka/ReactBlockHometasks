import React from "react";
import { RenderHeader } from "./components/header(37-3)/headerRender";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RenderRegistrationPage } from "./components/authorizationPage(38-39)/input";
import { Posts } from "./components/cards(38)/cardsPage";
import { CardDescriptionPage } from "./components/cards(38)/one_card_page/one_card_page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RenderHeader />

        <div
          className="contentWrapper"
          style={{
            backgroundColor: "#000000",
            width: "100%",
            height: "100%",
            minHeight: "1200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/cards" replace />} />
            <Route path="/cards" element={<Posts />} />
            <Route path="/cards/:cardId" element={<CardDescriptionPage />} />
            <Route path="login" element={<RenderRegistrationPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
