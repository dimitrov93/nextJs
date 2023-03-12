// Styled elements for the Card go here
import styled from "styled-components";

export const StyledSection = styled.div`
  max-width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.h1`
  margin: 1rem 0px 0px 0px;
  font-size: 3.5rem;
  text-align: center;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledDescription = styled.h3`
  margin: 0;
  font-size: 2rem;
  text-align: center;
  font-weight: 100;
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  margin-top: 5rem;
`;
export const InfoDivImg = styled.div`
  max-width: 70%;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  width: 40%;
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

export const BoldedSpan = styled.span`
  font-weight: 900;
`;
