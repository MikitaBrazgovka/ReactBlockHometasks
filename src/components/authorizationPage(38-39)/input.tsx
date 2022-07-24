import React, { useState } from "react";
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
  background-color: rgb(0, 119, 255);
  font-family: Raleway-Regular;
  color: rgb(225, 227, 230);
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1<{ isActive: boolean }>`
  font-family: Raleway-Bold;
  cursor: pointer;
  // color: grey;
  color: ${({ isActive }) => (isActive ? "rgb(0, 119, 255)" : "grey")};
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
  const [stateBtn, setState] = useState(props.boolean);

  return <Button disabled={stateBtn}>{props.text}</Button>;
}

/// компонент с кнопками переключения Логин/Регистрация

export function LoginRegistrationButtons({
  setIsLogin,
  isLogin,
}: {
  isLogin: boolean;
  setIsLogin: (val: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        marginBottom: "50px",
        alignItems: "center",
      }}
    >
      <Title
        onClick={() => {
          setIsLogin(true);
        }}
        isActive={isLogin}
      >
        Login
      </Title>
      <div
        style={{
          height: "30px",
          width: "2px",
          backgroundColor: "rgb(0, 119, 255)",
        }}
      ></div>
      <Title onClick={() => setIsLogin(false)} isActive={!isLogin}>
        Registration
      </Title>
    </div>
  );
}

/// страница логина:

export function Login() {
  return (
    <Container>
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

      <p style={{ fontFamily: "Raleway-Regular" }}>
        Forgot your password? <a href="#">Reset password</a>
      </p>
    </Container>
  );
}

export function Registration() {
  return (
    <Container>
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
      <Input
        label="Confirm Password:"
        name="Confirm Password"
        type="password"
        placeholder="confirm your password"
      />

      <Btn text="Register" boolean={Boolean(true)} />

      <p style={{ fontFamily: "Raleway-Regular" }}>
        Have account already? <a href="#">Try to Login</a>
      </p>
    </Container>
  );
}

/// страница регистрации:
export function RegistrationPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <LoginRegistrationButtons isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <Login /> : <Registration />}
    </Container>
  );
}

export function RenderRegistrationPage() {
  return <RegistrationPage />;
}
