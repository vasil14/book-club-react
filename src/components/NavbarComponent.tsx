import { Link } from "react-router-dom";
import { NavContent, NavbarStyled } from "./styles/Navbar.styled";
import { navLinksConstant } from "../assets/constants";
import { useState } from "react";
import Account from "./Account";
import Sidebar from "./User/Sidebar";

const NavbarComponent = () => {

  const [open, setOpen] = useState(false);
  
  const toggleSidebar = () => {
    setOpen((previousState) => !previousState);
  }

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
        <input type="search" placeholder="Search for books..." />
        <Account toggleSidebar={toggleSidebar}/>
      </NavContent>
      <Sidebar toggleSidebar={toggleSidebar} open={open}/>
    </NavbarStyled>
  );
};

export default NavbarComponent;
