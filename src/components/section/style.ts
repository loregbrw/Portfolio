import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";


export const StyledSection = styled.section`
  background-color: ${EColorPalette.PLATINUM};
  display: flex;
  min-height: 100vh;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 90px max(5%, 35px) max(5%, 35px) max(5%, 35px);

  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
