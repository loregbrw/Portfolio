import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #e8e2dd;

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
`;

export const StyledSpan = styled.span`
  cursor: pointer;
`;

export const StyledImg = styled.img`
  height: 35px;
`;

export const StyledArrow = styled.img`
  rotate: 90deg;
  height: 25px;
`;

export const StyledBox = styled.div`
  display: flex;
  gap: 10px;
`;
