import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  border-bottom: solid 1px #00000030;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 40px;
  align-items: center;
  /* align-items: center; */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 0 20px 0 ;

  img {
    height: 60px;
    transform: translate(0%, -20%);
  }

  a,
  a:visited,
  a:focus,
  a:active {
    font-size: large;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  input {
    width: 500px;
    height: 40px;
    border: none;
    background-color: #80808036;
    padding-left: 10px;
  }
  input:focus, input:active {
    border: none;
    outline: none;
  }
`;
