import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: normal;
  img {
    height: 50px;
  }
`;

export const NavLinks = styled.ul`
  padding-bottom: 5px;
  width: 100%;
  justify-content: space-beetwen;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  font-size: x-large;
  font-weight: bold;

  & > li {
  list-style-type: none;
  list-style: none;
    text-decoration-line: none;
    
  }
`;
