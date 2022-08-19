import * as React from "react";
import { ReactComponent as BurgerBtn } from "./burger.svg";
import { ReactComponent as UserIcon } from "./user_icon.svg";
import "./headerStyles.css";
import styled from "styled-components";

export const HeaderClosed = styled.header`
  background-color: rgb(49, 49, 49);
  min-height: 80px;
  align-items: center;
  width: 100%;
`;

export function HeaderClose() {
  return (
    <div className="userContainer">
      <div>
        <UserIcon />
      </div>
      <div>
        <h2>Username</h2>
      </div>
      <div></div>
    </div>
  );
}
