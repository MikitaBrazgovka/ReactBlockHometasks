import React, { useState } from "react";
import styled from "styled-components";
import "../mainTitle(37-1)/mainTitleStyles.css";
import { useDispatch } from "react-redux"; // для авторизации
import { setUser } from "./store/slices/userSlice"; // для авторизации
import { useNavigate } from "react-router-dom";
import bacgroungImage from "./bacgroundImage.png";
import "../../fonts/Exo_2/fontStyles.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  updateProfile,
} from "firebase/auth"; // для авторизации
console.log("bacgroungImage", bacgroungImage);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bacgroungImage});
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const AuthorizationWrapper = styled.div`
  width: 580px;
  @media (max-width: 800px) {
    width: 320px;
  }
  min-height: 540px;
  background: #242426;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  margin-top: 20px;
  opacity: 0.95;
`;

export const Inputs = styled.input`
  max-width: 575px;
  height: 56px;
  border-radius: 10px;
  border: none;
  margin: 20px 0;
  font-size: 16px;
  background-color: #323537;
  color: #80858b;
  font-family: Exo2-Regular;
  padding: 0 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #7b61ff;
  font-family: Raleway-Regular;
  color: rgb(225, 227, 230);
  cursor: pointer;
  border: none;
  :hover {
    background-color: green;
  }
`;

const Title = styled.h1<{ isActive: boolean }>`
  font-family: Raleway-Bold;
  cursor: pointer;
  color: grey;
  color: ${({ isActive }) => (isActive ? "rgb(0, 119, 255)" : "grey")};
`;

interface IUser extends User {
  accessToken: string;
}

/// компонент с инпутом:
export function Input(props: any) {
  return (
    <>
      <label
        style={{
          fontSize: "20px",
          fontFamily: "Exo2-Bold",
          color: "gray",
          fontWeight: "bold",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.label}
        <Inputs
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </>
  );
}

/// компонент с кнопкой:

export function Btn(props: any) {
  return (
    <Button
      style={{
        fontSize: "20px",
        fontFamily: "Exo2-Bold",
      }}
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
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
        justifyContent: "center",
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
  const [emailInputState, setEmailInputState] = useState("");
  const [passwordInputState, setpasswordInputState] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        const { email, uid, accessToken, displayName } = user as IUser;

        dispatch(
          setUser({ username: displayName, email, id: uid, token: accessToken })
        );
        navigate("/home");
      })

      .catch((Error) => alert(Error.message));
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin(emailInputState, passwordInputState);
        }}
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Input
          label="Email:"
          name="Email"
          type="email"
          placeholder="enter your email"
          value={emailInputState}
          onChange={(event: any) => setEmailInputState(event.target.value)}
        />
        <Input
          label="Password:"
          name="Password"
          type="password"
          placeholder="enter your password"
          value={passwordInputState}
          onChange={(event: any) => setpasswordInputState(event.target.value)}
        />
        <Btn
          text="Login"
          type="submit"
          disabled={
            emailInputState != "" && passwordInputState != "" ? false : true
          }
          onClick={() => handleLogin(emailInputState, passwordInputState)}
        />
      </form>
      <p style={{ fontFamily: "Raleway-Regular", color: "white" }}>
        Forgot your password? <a href="#">Reset password</a>
      </p>
    </>
  );
}

/// страница регистрации:

export function Registration() {
  const [emailInputState, setEmailInputState] = useState("");
  const [passwordInputState, setPasswordInputState] = useState("");
  const [checkPasswordInputState, setCheckPasswordInputState] = useState("");
  const [userNameInputState, setUserNameInputState] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: `${username}`,
      });

      const { uid, accessToken, displayName } = user as IUser;

      console.log(user);

      dispatch(
        setUser({
          username: displayName,
          email,
          id: uid,
          token: accessToken,
        })
      );
      navigate("/home");
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Input
        label="User Name:"
        name="name"
        type="text"
        placeholder="enter your Name"
        value={userNameInputState}
        onChange={(event: any) => setUserNameInputState(event.target.value)}
      />

      <Input
        label="Email:"
        name="Email"
        type="email"
        placeholder="enter your email"
        value={emailInputState}
        onChange={(event: any) => setEmailInputState(event.target.value)}
      />
      <Input
        label="Password:"
        name="Password"
        type="password"
        placeholder="enter your password"
        value={passwordInputState}
        onChange={(event: any) => setPasswordInputState(event.target.value)}
      />
      <Input
        label="Confirm Password:"
        name="Confirm Password"
        type="password"
        placeholder="confirm your password"
        value={checkPasswordInputState}
        onChange={(event: any) =>
          setCheckPasswordInputState(event.target.value)
        }
      />
      <Btn
        text="Register"
        disabled={
          userNameInputState != "" &&
          emailInputState != "" &&
          passwordInputState != "" &&
          checkPasswordInputState != "" &&
          passwordInputState == checkPasswordInputState
            ? false
            : true
        }
        onClick={() =>
          handleRegister(
            userNameInputState,
            emailInputState,
            passwordInputState
          )
        }
      />
      <p
        style={{
          fontFamily: "Raleway-Regular",
          color: "white",
          textAlign: "center",
        }}
      >
        Have account already? <a href="#">Try to Login</a>
      </p>
    </div>
  );
}

/// страница регистрации сборка:

export function RegistrationPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <AuthorizationWrapper>
        <LoginRegistrationButtons isLogin={isLogin} setIsLogin={setIsLogin} />
        {isLogin ? <Login /> : <Registration />}
      </AuthorizationWrapper>
    </Container>
  );
}

/// страница регистрации рендер:
export function RenderRegistrationPage() {
  return <RegistrationPage />;
}
