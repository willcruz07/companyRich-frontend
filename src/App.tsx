import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

import { useTheme } from "./hooks/theme";
import { CompanyProvider } from "./hooks/company";
import { ToastProvider } from "react-toast-notifications";
import { Routes } from "./routes";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CompanyProvider>
        <ToastProvider>
          <GlobalStyle />
          <Routes />
        </ToastProvider>
      </CompanyProvider>
    </ThemeProvider>
  );
};

export default App;
