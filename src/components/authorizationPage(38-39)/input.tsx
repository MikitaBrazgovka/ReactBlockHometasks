import React from "react";
import styled from "styled-components";
import "../mainTitle(37-1)/mainTitleStyles.css";
import { MainTitle } from "../mainTitle(37-1)/mainTitle";

export const Container = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Inputs = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  border: solid 1px rgb(0, 119, 255);
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  font-size: 16px;
  font-family: Raleway-Regular;
`;

export const Button = styled.button`
  width: 303px;
  height: 33px;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 16px;
  border: solid 1px rgb(0, 119, 255);
  background-color: rgb(0, 119, 255);
  font-family: Raleway-Regular;
  color: rgb(225, 227, 230);
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

/// компонент с инпутом:
export function Input(props: any) {
  return (
    <InputContainer>
      <label
        style={{
          fontSize: "20px",
          fontFamily: "Raleway-Regular",
          color: "gray",
          fontWeight: "bold",
        }}
      >
        {props.label}
        <Inputs
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </InputContainer>
  );
}

/// компонент с кнопкой

export function Btn(props: any) {
  return <Button>{props.text}</Button>;
}

/// страница логина:

export function LoginPage() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginBottom: "50px",
          alignItems: "center",
        }}
      >
        <MainTitle content="Login" />{" "}
        <div
          style={{
            height: "30px",
            width: "2px",
            backgroundColor: "rgb(0, 119, 255)",
          }}
        ></div>
        <MainTitle content="Registration" />
      </div>

      <Input
        label="Email:"
        name="Email"
        type="email"
        placeholder="enter your email"
      />

      <Input
        label="Password:"
        name="Password"
        type="password"
        placeholder="enter your password"
      />

      <Btn text="Login" />
    </Container>
  );
}
