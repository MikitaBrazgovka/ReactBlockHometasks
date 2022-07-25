import * as React from "react";

import styled from "styled-components";

const Header = styled.header`
  background-color: yellow;
  height: 200px;
`;

export const ButtonWrapper = styled.div<{ isOpened: boolean }>`
  width: 40px;
  height: 40px;
  align-items: center;
  gap: 10px;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
`;

const LI = styled.li`
  font-size: 20px;
  list-style-type: none;
  cursor: pointer;
`;

export function OpenedHeader(props: any) {
  return (
    <div className="listContainer">
      <ul style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <LI>{props.text1}</LI>
        <LI>{props.text2}</LI>
        <LI>{props.text3}</LI>
        <LI>{props.text4}</LI>
      </ul>
    </div>
  );
}
