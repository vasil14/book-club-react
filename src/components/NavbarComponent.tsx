import { Link} from "react-router-dom";
import { NavContent, NavbarStyled } from "./styles/Navbar.styled";
import { navLinksConstant } from "../assets/constants";


const NavbarComponent = () => {
  return (
    <NavbarStyled>
      <NavContent>
        <Link to={"/"}>
          <img src="/bookclub-logo.png" alt="" />
        </Link>
        {navLinksConstant.map((nav) => {
          return (
            <Link key={nav.id} to={`/${nav.title}`}>
              {nav.title}
            </Link>
          );
        })}
        <input type="search" />  
        <Link to={"/login"}>Login</Link>      
        <Link to={"/register"}>Register</Link>      
      </NavContent>
    </NavbarStyled>
  );
};

export default NavbarComponent;
