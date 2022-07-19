import * as React from "react";
import { ReactComponent as BurgerBtn } from "./burger.svg";
import { ReactComponent as UserIcon } from "./user_icon.svg";
import "./headerStyles.css";

export function HeaderLine() {
  return (
    <header>
      <div className="container">
        <div className="burgerContainer">
          <BurgerBtn />
        </div>
        <div className="userContainer">
          <div>
            <UserIcon />
          </div>
          <div>
            <h2>Username</h2>
          </div>
        </div>
      </div>
    </header>
  );
}
