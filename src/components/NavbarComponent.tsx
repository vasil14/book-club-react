import { Link } from "react-router-dom";
import { NavLinks, NavbarStyled } from "./styles/Navbar.styled";

const NavbarComponent = () => {
  return (
    
      <NavbarStyled>
        <Link to={"/"}>
          <img src="/bookclub-logo.png" alt="" />
        </Link>
        <NavLinks>
            <div>test 1</div>
            <div>test 2</div>
            <div>test 3</div>
        </NavLinks>
      </NavbarStyled>
  );
};

export default NavbarComponent;
