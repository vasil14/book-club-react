import styled from "styled-components";

interface StyledContainerProps {
  border?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  border-bottom: ${({border}) => border || "none"};
  padding: 20px 0 25px 0;
`;
