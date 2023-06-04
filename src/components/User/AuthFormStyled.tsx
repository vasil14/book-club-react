import styled from "styled-components";

export const FormContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  margin: auto;
  width: 50%;
  text-align: center;
`;

export const FormStyled = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: auto;
  max-height: 500px;
  text-align: left;
  padding: 50px 50px;
  background-color: #dbdbdb;
  input {
    height: 40px;
    border: none;
    :active,
    :focus {
      outline: none;
    }
  }
`;

export const LogoImg = styled.img`
  height: 80px;
  margin: auto;
  width: auto;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`