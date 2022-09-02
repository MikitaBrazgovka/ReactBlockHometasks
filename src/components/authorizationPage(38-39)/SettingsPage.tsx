import React from "react";
import styled from "styled-components";
import { Input } from "./LoginRegistrationPage";
import "../../fonts/Exo_2/fontStyles.css";
import { ThemeButton } from "../providers/themeProvider";
import { Button } from "./LoginRegistrationPage";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  max-width: 1490px;
  margin: 16px 85px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: Exo2-Bold;
  font-size: 24px;
  color: #ffffff;
`;

const BoxContainer = styled.div`
  width: 1180px;
  min-height: auto;
  background: #242426;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export function Settings() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Profile</Title>
      <BoxContainer>
        <Input
          label="User Name:"
          name="Name"
          type="text"
          value={"Please LogIn"}
        />
        <Input
          label="Email:"
          name="Email"
          type="email"
          value={"Please LogIn"}
        />
      </BoxContainer>

      <Title>Password</Title>
      <BoxContainer>
        <Input
          label="New password:"
          name="New password"
          type="text"
          value={"Please LogIn"}
        />
        <Input
          label="Password:"
          name="Password"
          type="text"
          value={"Please LogIn"}
        />
        <Input
          label="Confirm password:"
          name="Email"
          type="email"
          value={"Please LogIn"}
        />
      </BoxContainer>

      <Title>Color mode:</Title>
      <BoxContainer>
        <Title style={{ fontSize: "16px" }}>Change theme color</Title>
        <ThemeButton />
      </BoxContainer>

      <Button onClick={() => navigate("/home")} style={{ width: "266px" }}>
        Go to main
      </Button>
    </PageContainer>
  );
}
