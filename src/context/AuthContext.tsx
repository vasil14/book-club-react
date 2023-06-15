import React, { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  id: number | null;
  name: string | null;
  email: string | null;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const [user, setUser] = useState<UserProps>({
    id: null,
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<AxiosResponse | null | void>(null);

  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/login", data);
      await getUser();
      navigate("/");
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 422) {
        setErrors(err?.response);
      }
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/register", data);
      await getUser();
      navigate("/");
    } catch (error: any) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const logout = () => {
    axios.post("/logout").then(() => {
      setUser({
        id: null,
        name: "",
        email: "",
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, errors, login, register, getUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
