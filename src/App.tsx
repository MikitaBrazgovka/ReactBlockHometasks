import React from "react";
import { RenderHeader } from "./components/header(37-3)/headerRender";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RenderRegistrationPage } from "./components/authorizationPage(38-39)/LoginRegistrationPage";
import { Posts } from "./components/cards(38)/cardsPage";
import { CardDescriptionPage } from "./components/cards(38)/one_card_page/one_card_page";
import { ThemeProvider } from "./components/providers/themeProvider";
import { Layout } from "./layout";
import { Settings } from "./components/authorizationPage(38-39)/SettingsPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <RenderHeader />
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Posts />} />
              <Route path="/home/:cardId" element={<CardDescriptionPage />} />
              <Route path="/login" element={<RenderRegistrationPage />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
