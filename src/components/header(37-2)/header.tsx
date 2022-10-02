import * as React from "react";
import "../../fonts/Exo_2/fontStyles.css";
import { Button } from "../authorizationPage(38-39)/LoginRegistrationPage";
import { ReactComponent as UserIcon } from "./user_icon.svg";
import "./headerStyles.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../authorizationPage(38-39)/store/slices/userSlice";

export const LoginButton = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: Exo2-Regular;
  transition: 0.3s;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  :hover {
    background-color: green;
  }
`;

export function HeaderClose() {
  const navigate = useNavigate();
  const { isAuth, email, username } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div className="userContainer">
      <div>
        <LoginButton onClick={() => dispatch(removeUser())}>
          <UserIcon />
          <p style={{ color: "#7b61ff" }}>Log out: {username}</p>
        </LoginButton>
      </div>
    </div>
  ) : (
    <div className="userContainer">
      <div>
        <LoginButton onClick={() => navigate("/login")}>
          <UserIcon />
          <p style={{ color: "#7b61ff" }}>Log in / Registration</p>
        </LoginButton>
      </div>
    </div>
  );
}
