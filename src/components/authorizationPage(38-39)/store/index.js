import { configureStore } from "@reduxjs/toolkit"; // создание стора
import userReduser from "./slices/userSlice";

export const store = configureStore({
  reducer: { user: userReduser },
});
