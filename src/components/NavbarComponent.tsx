import { Link } from "react-router-dom";
import { NavLinks, NavbarStyled } from "./styles/Navbar.styled";
import { navLinksConstant } from "../assets/constants";

const NavbarComponent = () => {
  return (
    <NavbarStyled>
      <Link to={"/"}>
        <img src="/bookclub-logo.png" alt="" />
      </Link>
      <NavLinks>
        {navLinksConstant.map((nav) => {
          return (
            <li>
              <Link key={nav.id} to={`/${nav.title}`}>
                {nav.title}
              </Link>
            </li>
          );
        })}
      </NavLinks>
    </NavbarStyled>
  );
};

export default NavbarComponent;
