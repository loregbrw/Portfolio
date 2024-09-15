import styled from "styled-components";


export const StyledSection = styled.section`
  background-color: #e8e2dd;
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
