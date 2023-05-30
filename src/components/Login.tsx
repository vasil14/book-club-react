import { useState } from "react";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { ButtonStyled } from "./styles/Button.styled";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: auto;
  height: 300px;
  padding: 50px 50px;
  background-color: #bebebe;
  input {
    height: 40px;
    border: none;

    :active,
    :focus {
      outline: none;
    }
  }
`;
const FormContainer = styled.div`
  display: block;
  max-width: 500px;
  /* height: 500px; */
  margin: auto;
  width: 50%;
  height: 100vh;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer>
      <Link to={"/"}>
        <img src="/bookclub-logo.png" alt="logo" style={{ height: "50px" }} />
      </Link>
      <FormStyled action="POST" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonStyled>Log in</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Login;
