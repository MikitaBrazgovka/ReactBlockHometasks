import * as React from "react";
import { ReactComponent as CloserBtn } from "./close_btn.svg";

import styled from "styled-components";

const Header = styled.header`
  background-color: yellow;
  height: 200px;
`;

const CloserWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
`;

const LI = styled.li`
  font-size: 20px;
  list-style-type: none;
  cursor: pointer;
`;

export function OpenedHeader(props: any) {
  return (
    <Header>
      <div className="container">
        <CloserWrapper>
          <CloserBtn />
        </CloserWrapper>

        <div className="listContainer">
          <ul>
            <LI>{props.text1}</LI>
            <LI>{props.text2}</LI>
            <LI>{props.text3}</LI>
            <LI>{props.text4}</LI>
          </ul>
        </div>
      </div>
    </Header>
  );
}
