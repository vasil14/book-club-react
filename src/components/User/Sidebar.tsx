import {
  SidebarContainer,
  SidebarContent,
  SidebarHeader,
} from "../styles/Sidebar.styled";
import { ButtonStyled } from "../styles/Button.styled";
import { User, X } from "phosphor-react";

interface Props {
  open: boolean;
  toggleSidebar: ()=>void
}

const Sidebar = ({ open,toggleSidebar }: Props) => {
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
        <ButtonStyled >Login</ButtonStyled>
        <ButtonStyled >Register</ButtonStyled>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
