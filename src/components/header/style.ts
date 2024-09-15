import styled, { css } from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${EColorPalette.PLATINUM};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 35px;

  font-weight: 700;

  position: fixed;
  z-index: 100;
`;


export const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 25px;

  @media (max-width: 730px) {
    display: none;    
  }
`;

export const StyledMenu = styled.div`
  display: none;
  align-items: center;

  @media (max-width: 730px) {
    display: flex;    
  }
`;

export const StyledButton = styled.img`
  height: 30px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    filter: opacity(75%);
  }
`

export const StyledSpan = styled.span`
  cursor: pointer;
  position: relative;
  display: inline-block;

  font-size: 15px;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    left: -1px;
    bottom: -2px;
    background-color: ${EColorPalette.CERULEAN};
    transition: width 0.3s ease-out;
    border-radius: 10px;
  }

  &:hover::after {
    width: calc(100% + 2px);
  }
`;

export const StyledLanguage = styled.span`
  font-size: 15px;
`

export const StyledImg = styled.img`
  height: 35px;
`;

export const StyledArrow = styled.img<{ rotated: boolean }>`
  height: 15px;
  transition: transform 0.3s ease;

  transform: rotate(90deg);

  ${({ rotated }) =>
    rotated &&
    css`
      transform: rotate(-90deg);
    `}
`;

export const StyledBox = styled.div`
  display: flex;

  align-items: center;
  cursor: pointer;

  user-select: none;

  gap: 10px;
`;
