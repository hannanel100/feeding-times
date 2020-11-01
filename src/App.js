import React from "react";
import ApplicationRoutes from "./config/ApplicationRoutes";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./config/theme";
import { StateProvider } from "./store";

function App() {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <ApplicationRoutes />
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;
