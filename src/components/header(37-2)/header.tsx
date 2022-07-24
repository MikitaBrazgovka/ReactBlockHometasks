import * as React from "react";
import { ReactComponent as BurgerBtn } from "./burger.svg";
import { ReactComponent as UserIcon } from "./user_icon.svg";
import "./headerStyles.css";
import styled from "styled-components";

import { CloserWrapper } from "../header(37-3)/headerOpened";

export const HeaderClosed = styled.header`
  background-color: rgb(0, 119, 255);
  min-height: 80px;
  align-items: center;
  width: 100%;
`;

export function HeaderLine() {
  return (
    <div className="container">
      <CloserWrapper>
        <BurgerBtn style={{ cursor: "pointer" }} />
      </CloserWrapper>

      <div className="userContainer">
        <div>
          <UserIcon />
        </div>
        <div>
          <h2>Username</h2>
        </div>
      </div>
    </div>
  );
}
