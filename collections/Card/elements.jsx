// Styled elements for the Card go here
import styled from "styled-components";

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  margin-top: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
export const InfoDivImg = styled.div`
  max-width: 70%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  width: 40%;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  gap: 1rem;
  transition: transform 0.3s ease-in-out;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 1rem;
  &:hover {
    transform: translateY(-10px);
    border: 2px solid blue;
  }


`;
export const CardImage = styled.div`

`;

export const InfoCard = styled.div``;

export const InfoCardHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  pointer-events: none;

  ${CardContainer}:hover & {
    color: blue;
    text-decoration: underline;
  }


`;

export const InfoCardDesc = styled.p`
  font-size: 1.15rem;
  pointer-events: none;
  margin: 0;
  width: 85%;
`;