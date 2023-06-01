import React, { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

interface AuthContext {
  user: any;
  errors: {
    name: string | null;
    email: string | null;
    password: string | null;
    password_confirmation: string | null;
  } | null;
  login: (username: string, password: string) => void;
  register: (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => void;
  getUser: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext>({
  user: null,
  errors: null,
  login: () => {},
  register: () => {},
  getUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const [user, setUser] = useState<any>(null);
  const [errors, setErrors] = useState<any>(null);

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/user");
      setUser(data);
    } catch (error: any) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    await csrf();
    try {
      await axios.post("/login", { email, password });
      await getUser();
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => {
    await csrf();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      await getUser();
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post("/logout");
      setUser(null);
    } catch (error: any) {
      console.error(error);
    }
  };

  const authContextValue: AuthContext = {
    user,
    errors,
    login,
    register,
    getUser,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
