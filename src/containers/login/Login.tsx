import { useState, FormEvent } from "react";
import useAuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  ErrorMessage,
  FormContainer,
  FormStyled,
  LogoImg,
  Row,
} from "../../components/User/AuthFormStyled";
import { ButtonStyled } from "../../components/ButtonStyled";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { login, errors }: any = useAuthContext();

  const handleLoginData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: value,
    });
  };

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginInfo);
  };

  return (
    <FormContainer>
      <Link to={"/"}>
        <LogoImg src="/bookclub-logo.png" alt="logo" />
      </Link>
      <FormStyled action="POST" onSubmit={handleLoginSubmit}>
        <Row>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={loginInfo.email}
            name="email"
            onChange={handleLoginData}
          />
          {errors?.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </Row>
        <Row>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={loginInfo.password}
            name="password"
            onChange={handleLoginData}
          />
          {errors?.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Row>
        <ButtonStyled>Login</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Login;
