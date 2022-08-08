import * as React from "react";
import "../../fonts/Exo_2/fontStyles.css";
import styled from "styled-components";

import HomeIcon from "./icons/home.png";
import TrendsIcon from "./icons/trends_icon.png";
import FavoriteIcon from "./icons/favorites_icon.png";
import SettingIcon from "./icons/settings_icon.png";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: yellow;
  height: 200px;
`;

export const ButtonWrapper = styled.div<{ isOpened: boolean }>`
  width: 35px;
  height: 35px;
  align-items: center;
  gap: 10px;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
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
  width: 100px;
  gap: 10px;

  :hover {
    text-decoration: underline;
    color: white;
  }
`;

export function OpenedHeader(props: any) {
  return (
    <div className="listContainer">
      <ul style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <Link to="/">
          <LI>
            <div>{props.text1}</div>
            <div>
              <img src={HomeIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/cards">
          <LI>
            <div>{props.text2} </div>
            <div>
              {" "}
              <img src={TrendsIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/login">
          <LI>
            <div>{props.text3}</div>
            <div>
              <img src={FavoriteIcon} alt="" />
            </div>
          </LI>
        </Link>

        <LI>
          <div>{props.text4}</div>
          <div>
            <img src={SettingIcon} alt="" />
          </div>
        </LI>
      </ul>
    </div>
  );
}
