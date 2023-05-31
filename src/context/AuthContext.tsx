import React, { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

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
    } catch (error: any) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
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
      setUser(null);
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
