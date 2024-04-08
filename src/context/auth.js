import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const userTokenName = "user_token_fuhr2";

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const isTokenExpired = (token) => {
    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const expirationDateString = tokenPayload.expiration;
      const expirationDate = new Date(expirationDateString);
      const currentDate = new Date();
      return expirationDate < currentDate;
    } catch (error) {
      // Em caso de erro na decodificação do token, considera-se como token expirado
      return true;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(userTokenName);
    if (token) {
      setAuthenticated(!isTokenExpired(token)); 
    }
  }, []);

  const login = (token) => {
    localStorage.setItem(userTokenName, token);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(userTokenName);
    setAuthenticated(false);
  };

  const isAuthenticated = () => {
    return authenticated;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
