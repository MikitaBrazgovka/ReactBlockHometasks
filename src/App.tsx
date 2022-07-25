import React from "react";
import logo from "./logo.svg";
import { MainTitle } from "./components/mainTitle(37-1)/mainTitle";
import { HeaderClose } from "./components/header(37-2)/header";
import { OpenedHeader } from "./components/header(37-3)/headerOpened";
import { Input } from "./components/authorizationPage(38-39)/input";
import { Btn } from "./components/authorizationPage(38-39)/input";
import { RenderHeader } from "./components/header(37-3)/headerRender";

import { RenderRegistrationPage } from "./components/authorizationPage(38-39)/input";

function App() {
  return (
    <div className="App">
      <RenderHeader />

      <RenderRegistrationPage />
    </div>
  );
}

export default App;
