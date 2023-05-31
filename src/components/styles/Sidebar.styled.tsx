import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-400px')};
  width: 400px;
  height: 100vh;
  background-color: #f1f1f1;
  transition: right 0.3s ease-in-out;
`;


export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 0 40px;
`

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 30px;
  border-bottom: solid 1px #00000030;
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
  }
`