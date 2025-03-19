import React from "react";
import { ThemeProvider } from "./components/ui";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Outlet />
    </ThemeProvider>
  );
}
