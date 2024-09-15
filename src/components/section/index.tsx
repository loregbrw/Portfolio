import React from "react";
import { StyledSection } from "./style";

interface IHomeProps {
  children: React.ReactNode,
}

export const Section = ({ children }: IHomeProps) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
};
