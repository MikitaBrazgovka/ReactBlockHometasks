import * as React from "react";
import "../../fonts/Exo_2/fontStyles.css";
import styled from "styled-components";

import HomeIcon from "./icons/home.png";
import TrendsIcon from "./icons/trends_icon.png";
import FavoriteIcon from "./icons/favorites_icon.png";
import SettingIcon from "./icons/settings_icon.png";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.div<{ isOpened: boolean }>`
  width: 35px;
  height: 35px;
  align-items: center;
  gap: 10px;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
`;

const LI = styled.li`
  font-size: 20px;
  list-style-type: none;
  cursor: pointer;
  font-family: Exo2-Regular;
  transition: 0.3s;
  color: #7b61ff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  :hover {
    color: white;
  }
`;

const InputSearch = styled.input`
  display: flex;
  width: 500px;
  height: 40px;
  background-color: #323537;
  border-radius: 10px;
  border: none;
  color: wheat;
  font-size: 16px;
  font-family: Exo2-Regular;
`;

export function OpenedHeader(props: any) {
  return (
    <ListContainer>
      <ul style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <Link to="/home" style={{ textDecoration: "none", display: "flex" }}>
          <LI>
            <div>{props.text1}</div>
            <div>
              <img src={HomeIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/toprated" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text2} </div>
            <div style={{ alignSelf: "center" }}>
              <img src={TrendsIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text3}</div>
            <div>
              <img src={FavoriteIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/settings" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text4}</div>
            <div>
              <img src={SettingIcon} alt="" />
            </div>
          </LI>
        </Link>
      </ul>

      <InputSearch />
    </ListContainer>
  );
}
