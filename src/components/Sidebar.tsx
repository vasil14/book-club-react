import {
  SidebarContainer,
  SidebarContent,
  SidebarHeader,
} from "./StyledSidebar";
import { ButtonStyled } from "./ButtonStyled";
import { User, X } from "phosphor-react";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ open, toggleSidebar }: Props) => {
  return (
    <SidebarContainer open={open}>
      <SidebarHeader>
        <div>
          <User size={25} />
          Account
        </div>
        <div onClick={toggleSidebar}>
          Close
          <X size={25} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Link to={"/login"}>
          <ButtonStyled>Login</ButtonStyled>
        </Link>
        <Link to={"/register"}>
          <ButtonStyled>Register</ButtonStyled>
        </Link>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
