import * as React from "react";
import { Button } from "../authorizationPage(38-39)/LoginRegistrationPage";
import { ReactComponent as UserIcon } from "./user_icon.svg";
import "./headerStyles.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../authorizationPage(38-39)/store/slices/userSlice";

export const HeaderClosed = styled.header`
  background-color: rgb(49, 49, 49);
  min-height: 80px;
  align-items: center;
  width: 100%;
`;

export function HeaderClose() {
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div className="userContainer">
      <div>
        <Button
          onClick={() => dispatch(removeUser())}
          style={{
            height: "40px",
            width: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            color: "black",
          }}
        >
          <UserIcon />
          Log out {email}
        </Button>
      </div>
    </div>
  ) : (
    <div className="userContainer">
      <div>
        <Button
          onClick={() => navigate("/login")}
          style={{
            height: "40px",
            width: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            color: "black",
          }}
        >
          <UserIcon />
          Login
        </Button>
      </div>
    </div>
  );
}
