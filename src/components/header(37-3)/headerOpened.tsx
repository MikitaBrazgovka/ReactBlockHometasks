import * as React from "react";
import "../../fonts/Exo_2/fontStyles.css";
import styled from "styled-components";

import HomeIcon from "./icons/home.png";
import TrendsIcon from "./icons/trends_icon.png";
import FavoriteIcon from "./icons/favorites_icon.png";
import SettingIcon from "./icons/settings_icon.png";
import SearchIcon from "./icons/Zoom.png";
import { Link } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { SearchContext } from "../providers/searchProvider";

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
  width: 600px;
  height: 40px;
  background-color: #323537;
  border-radius: 10px;
  border: none;
  color: wheat;
  font-size: 16px;
  font-family: Exo2-Regular;
`;

const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  gap: 20px;
`;

export function OpenedHeader(props: any) {
  const [inputvalue, setinputvalue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(inputvalue);

  const context = useContext(SearchContext);
  if (!context) return null;
  const { searchValue, setSearchValue } = context;

  return (
    <ListContainer>
      <ul style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text1}</div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={HomeIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/new" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text2} </div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={TrendsIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text3}</div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={FavoriteIcon} alt="" />
            </div>
          </LI>
        </Link>

        <Link to="/settings" style={{ textDecoration: "none" }}>
          <LI>
            <div>{props.text4}</div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={SettingIcon} alt="" />
            </div>
          </LI>
        </Link>
      </ul>

      <InputSearchContainer>
        <InputSearch
          // value={inputvalue}
          // onChange={(el) => setinputvalue(el.target.value)}
          defaultValue={searchValue}
          ref={inputRef}
          type="search"
        />

        <div
          onClick={(e) => {
            const { current } = inputRef;
            if (current) {
              setSearchValue(current.value);
            }
          }}
        >
          <img
            src={SearchIcon}
            alt="search"
            style={{
              alignItems: "center",
              display: "flex",
              height: "30px",
              width: "30px",
              cursor: "pointer",
            }}
          />
        </div>
      </InputSearchContainer>
    </ListContainer>
  );
}
