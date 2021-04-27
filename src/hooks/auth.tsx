import React from "react";
import * as Auth from "../services/authSession";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = React.useState<boolean>(() => {
    const isLogged = localStorage.getItem("@brbatel:logged");
    return !!isLogged;
  });

  const signIn = async (email: string, password: string) => {
    const response = await Auth.postSession(email, password);
    if (response.status === 200) {
      localStorage.setItem("@brbatel:user", JSON.stringify(response.data.user));
      localStorage.setItem("@brbatel:token", response.data.token);
      localStorage.setItem("@brbatel:logged", "true");
      setLogged(true);
    } else {
      alert(response.data.message);
    }
  };

  const signOut = () => {
    localStorage.removeItem("@brbatel:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
};
