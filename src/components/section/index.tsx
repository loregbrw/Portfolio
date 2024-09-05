import { StyledSection } from "./style";

interface HomeProps {
  children: ReactNo
}

export const Section = ({ children }: any) => {
  return (
    <>
        <StyledSection>
            {children}
        </StyledSection>
    </>
  );
};
