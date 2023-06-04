import useAuthContext from "../../context/AuthContext";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, FormContainer, FormStyled, LogoImg, Row } from "./AuthFormStyled";
import { ButtonStyled } from "../ButtonStyled";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { register, errors }: any = useAuthContext();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return (
    <FormContainer>
      <Link to={"/"}>
        <LogoImg src="/bookclub-logo.png" alt="logo" />
      </Link>
      <FormStyled action="POST" onSubmit={handleRegister}>
        <Row>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors?.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </Row>
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
        <Row>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            placeholder="Password confirmation"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          {errors?.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation}</ErrorMessage>
          )}
        </Row>
        <ButtonStyled>Register</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Register;