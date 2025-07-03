// app/Main.jsx
"use client"; // 👈 Must be the first line

import React, { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

const Main = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <main className={theme}>{children}</main>;
};

export default Main;
