import * as React from "react";
import { Button } from "../authorizationPage(38-39)/LoginRegistrationPage";
import { ReactComponent as UserIcon } from "./user_icon.svg";
import "./headerStyles.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const HeaderClosed = styled.header`
  background-color: rgb(49, 49, 49);
  min-height: 80px;
  align-items: center;
  width: 100%;
`;

export function HeaderClose() {
  const navigate = useNavigate();

  return (
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
