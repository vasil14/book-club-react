import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  border-bottom: solid 1px black;
  padding: 0px 40px;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  align-items: baseline;
  align-items: center;
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;

  img {
    height: 60px;
  }

  a,
  a:visited,
  a:focus,
  a:active {
    font-size: large;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  input {
    width: 500px;
    height: 40px;
    border: none;
    background-color: #80808036;
  }
  input:focus, input:active {
    border: none;
    outline: none;
  }
`;
