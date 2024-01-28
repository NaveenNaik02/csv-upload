"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type UserContextType = {
  user: null | string;
  setUser: Dispatch<SetStateAction<null | string>>;
  login: (userData: string) => void;
};

const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  login: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<null | string>(null);

  const login = (userData: string) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
