import styled from "styled-components";

export const StyledSection = styled.div`
  max-width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

    @media (max-width: 768px) {
    max-width: 90%;
  }
`;


export const StyledHeader = styled.h1`
  margin: 1rem 0px 0px 0px;
  font-size: 3.5rem;
  text-align: center;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

`;

export const StyledDescription = styled.h3`
  margin: 0;
  font-size: 2rem;
  text-align: center;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;