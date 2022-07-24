import React from "react";
import { HeaderClosed } from "../header(37-2)/header";
import { HeaderLine } from "../header(37-2)/header";
import { OpenedHeader } from "../header(37-3)/headerOpened";
// import { HeaderOpened } from "../header(37-3)/headerOpened";
import { ReactComponent as BurgerBtn } from "../header(37-2)/burger.svg";
import { ReactComponent as CloserBtn } from "../header(37-3)/close_btn.svg";

import { CloserWrapper } from "../header(37-3)/headerOpened";
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
  return (
    <Container>
      <HeaderClosed>
        <CloserWrapper>
          <BurgerBtn style={{ cursor: "pointer" }} />
          <CloserBtn style={{ cursor: "pointer" }} />
        </CloserWrapper>

        <HeaderLine />

        <OpenedHeader
          text1="All posts"
          text2="My posts"
          text3="Add posts"
          text4="Log out"
        />
      </HeaderClosed>
    </Container>
  );
}
