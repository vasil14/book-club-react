import { useState } from "react";
import { ButtonStyled } from "../styles/Button.styled";
import {
  FormContainer,
  FormStyled,
  Row,
  LogoImg,
  ErrorMessage,
} from "../styles/Auth.styled";
import useAuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors }: any  = useAuthContext();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <FormContainer>
      <Link to={"/"}>
        <LogoImg src="/bookclub-logo.png" alt="logo" />
      </Link>
      <FormStyled action="POST" onSubmit={handleLogin}>
        <Row>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors?.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </Row>
        <Row>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors?.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Row>
        <ButtonStyled>Log in</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Login;
