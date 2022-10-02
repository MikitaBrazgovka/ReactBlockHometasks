import React, { useState, useContext } from "react";

import { HeaderClose } from "../header(37-2)/header";
import { OpenedHeader } from "../header(37-3)/headerOpened";
import { ReactComponent as BurgerBtn } from "../header(37-2)/burger.svg";
import { ReactComponent as CloserBtn } from "../header(37-3)/icons/close_btn.svg";
import { ReactComponent as MainLogo } from "../../logo.svg";
import { ThemeContext } from "../providers/themeProvider";

import { ButtonWrapper } from "../header(37-3)/headerOpened";
import styled from "styled-components";

import { ThemeButton } from "../providers/themeProvider";

export const HeaderClosed = styled.header`
  min-height: 80px;
  align-items: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1320px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  min-height: 80px;
  margin: 0 12px;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 1320px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LogoButtonContainer = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  gap: 30px;

  align-items: center;
`;

export function RenderHeader() {
  const [stateBtn, setstateBtn] = useState(true);
  const context = useContext(ThemeContext);

  if (!context) return null;

  return (
    <HeaderClosed
      style={{ backgroundColor: `${context.themeVariant["headerBackground"]}` }}
    >
      <Container>
        <LogoButtonContainer>
          <ThemeButton />

          <MainLogo style={{}} />

          <ButtonWrapper onClick={() => setstateBtn(false)} isOpened={stateBtn}>
            <BurgerBtn style={{ cursor: "pointer" }} />
          </ButtonWrapper>

          <ButtonWrapper onClick={() => setstateBtn(true)} isOpened={!stateBtn}>
            <CloserBtn
              style={{ cursor: "pointer", width: "35px", height: "35px" }}
            />
          </ButtonWrapper>
        </LogoButtonContainer>

        {stateBtn ? (
          <HeaderClose />
        ) : (
          <OpenedHeader
            text1="Home"
            text2="New"
            text3="Favorites"
            text4="Settings"
          />
        )}
      </Container>
    </HeaderClosed>
  );
}
