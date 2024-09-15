import styled from "styled-components";

export const StyledGithub = styled.img`
  display: block;

  position: fixed;
  bottom: 20px;
  right: 20px;

  height: 70px;

  @media (max-width: 730px) {
    display: none;    
  }

  transition: 300ms;
  cursor: pointer;

  &:hover {
    filter: brightness(75%) saturate(125%);
  }
`