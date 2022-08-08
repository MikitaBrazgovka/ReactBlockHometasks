import React, { useState } from "react";
import { HeaderClosed } from "../header(37-2)/header";
import { HeaderClose } from "../header(37-2)/header";
import { OpenedHeader } from "../header(37-3)/headerOpened";
import { ReactComponent as BurgerBtn } from "../header(37-2)/burger.svg";
import { ReactComponent as CloserBtn } from "../header(37-3)/icons/close_btn.svg";
import { ReactComponent as MainLogo } from "../../logo.svg";

import { ButtonWrapper } from "../header(37-3)/headerOpened";
import styled from "styled-components";

const Container = styled.div`
  min-height: 80px;
  margin: 0 16px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export function RenderHeader() {
  const [stateBtn, setstateBtn] = useState(true);

  return (
    <HeaderClosed>
      <Container>
        <MainLogo />
        <ButtonWrapper onClick={() => setstateBtn(false)} isOpened={stateBtn}>
          <BurgerBtn style={{ cursor: "pointer" }} />
        </ButtonWrapper>

        <ButtonWrapper onClick={() => setstateBtn(true)} isOpened={!stateBtn}>
          <CloserBtn
            style={{ cursor: "pointer", width: "35px", height: "35px" }}
          />
        </ButtonWrapper>

        {stateBtn ? (
          <HeaderClose />
        ) : (
          <OpenedHeader
            text1="Home"
            text2="Trends"
            text3="Favorites"
            text4="Settings"
          />
        )}
      </Container>
    </HeaderClosed>
  );
}
