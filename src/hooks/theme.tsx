import * as React from "react";
import defaultTheme from "../styles/Themes/default";

interface IThemeContext {
  theme: ITheme;
}

interface ITheme {
  theme: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<ITheme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = React.useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
