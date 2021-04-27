import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./hooks/theme";
import { AuthProvider } from "./hooks/auth";
import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root"),
);
