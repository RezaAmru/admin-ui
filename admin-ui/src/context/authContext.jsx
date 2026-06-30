/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

export const AuthContext = createContext(null);

function decodeAuthToken(token) {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      return null;
    }

    const decoded = decodeAuthToken(token);

    if (!decoded) {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }

    return decoded;
  });

  const value = useMemo(
    () => ({
      user,
      login(token) {
        const decoded = decodeAuthToken(token);

        if (!decoded) {
          throw new Error("Token login tidak valid.");
        }

        localStorage.setItem(TOKEN_KEY, token);
        setUser(decoded);
        return decoded;
      },
      logout() {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within AuthContextProvider.");
  }

  return auth;
}
