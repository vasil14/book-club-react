import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { ErrorMessage, FormContainer, FormStyled, LogoImg, Row } from "../../components/User/AuthFormStyled";
import { ButtonStyled } from "../../components/ButtonStyled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors }: any = useAuthContext();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({email, password});
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
        <ButtonStyled>Login</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Login;
