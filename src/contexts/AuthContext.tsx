import { createContext, ReactNode, useState } from "react";
import ResponseModel from "../models/ResponseModel";
import { apiPostAuth } from "../Services/Service";

interface AuthContextProps {
  user: ResponseModel;
  handleLogout(): void;
  handleLogin(user: ResponseModel): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<ResponseModel>({
    id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: ResponseModel) {
    setIsLoading(true);
    try {
      await apiPostAuth(`/auth/login`, userLogin, setUser);
      alert("Usuário logado com sucesso!");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      alert("Email e/ou senha incorretos");
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUser({
      id: "",
      name: "",
      email: "",
      password: "",
      photo: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
