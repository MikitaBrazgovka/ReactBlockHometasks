import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./LoginRegistrationPage";
import "../../fonts/Exo_2/fontStyles.css";
import { ThemeButton } from "../providers/themeProvider";
import { Button } from "./LoginRegistrationPage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

import { getAuth, updatePassword } from "firebase/auth";

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

  const { isAuth, email, username }: any = useAuth();

  const [NewPassword, SetNewPassword] = useState("");
  const [ConfirmNewPassword, SetConfirmNewPassword] = useState("");

  const handleCahngePassword = (password: string) => {
    const auth = getAuth();
    const user: any = auth.currentUser;

    updatePassword(user, password)
      .then(() => {
        alert("Password changed");
      })
      .catch((Error) => alert(Error.message));
  };

  return (
    <PageContainer>
      <Title>Profile</Title>
      <BoxContainer>
        <Input
          label="User Name:"
          name="Name"
          type="text"
          value={`${isAuth ? username : "Not authorized"}`}
        />
        <Input
          label="Email:"
          name="Email"
          type="email"
          value={`${isAuth ? email : "Not authorized"}`}
        />
      </BoxContainer>

      <Title>Password</Title>
      <BoxContainer>
        <Input
          label="New password:"
          name="New password"
          type="password"
          placeholder={"Enter new password"}
          value={NewPassword}
          onChange={(event: any) => SetNewPassword(event.target.value)}
        />
        <Input
          label="Password:"
          name="Password"
          type="text"
          value={`${isAuth ? "Password identifyed" : "Not authorized"}`}
          disabled={true}
        />
        <Input
          label="Confirm password:"
          name="Confirm password"
          type="password"
          placeholder={"Confirm new password"}
          value={ConfirmNewPassword}
          onChange={(event: any) => SetConfirmNewPassword(event.target.value)}
        />
        <Button
          onClick={() => {
            handleCahngePassword(NewPassword);
          }}
          style={{ width: "266px" }}
          disabled={
            NewPassword != "" &&
            ConfirmNewPassword != "" &&
            NewPassword == ConfirmNewPassword
              ? false
              : true
          }
        >
          Change Password
        </Button>
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
