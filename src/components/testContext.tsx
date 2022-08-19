import React, { useState, useContext, ReactNode } from "react";

// interface IMyContext {
//   count: number;
//   setCount: (count: number) => void;
// }

// const MyContext = React.createContext<IMyContext | null>(null);

// const CounterProvider = ({ children }: { children: ReactNode }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <MyContext.Provider value={{ count, setCount }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // context => MyContext { context.ts, CounterProvider.tsx }

// const User = () => {
//   const context = useContext(MyContext);

//   if (!context) return null;

//   const { count } = context;

//   return <div>{count}</div>;
// };

// const User1 = () => {
//   return (
//     <MyContext.Consumer>
//       {(value) => <div>{value?.count}</div>}
//     </MyContext.Consumer>
//   );
// };

// const Car = () => {
//   const context = useContext(MyContext);

//   if (!context) return null;

//   const { count } = context;

//   return <div>{count}</div>;
// };

// const Increment = () => {
//   const context = useContext(MyContext);

//   if (!context) return null;

//   const { count, setCount } = context;
//   return (
//     <button
//       onClick={() => {
//         setCount(count + 1);
//       }}
//     ></button>
//   );
// };

// const baseTheme = {
//   dark: {
//     primary: "#fff",
//   },
//   light: {
//     primary: "#000",
//   },
// };

// const App = () => {
//   const [theme, setTheme] = useState("dark");

//   return (
//     <ThemeProvider theme={baseTheme[theme]}>
//       <CounterProvider>
//         <AppRoutes />
//       </CounterProvider>
//     </ThemeProvider>
//   );
// };

// const Button = styled.button`
//   color: ${(props) => props.theme.primary};
// `;
