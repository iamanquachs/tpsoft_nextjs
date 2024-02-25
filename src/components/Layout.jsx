import React from "react";
import Header from "./header.jsx";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
