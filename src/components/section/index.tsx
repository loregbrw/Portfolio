import React from "react";
import { StyledSection } from "./style";

interface IHomeProps {
  id: string;
  children: React.ReactNode,
}

export const Section = ({ children, id }: IHomeProps) => {
  return (
    <StyledSection id={id}>
      {children}
    </StyledSection>
  );
};
