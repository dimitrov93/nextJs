// Styled elements for the Card go here
import styled from "styled-components";
import {
  SectionSubheading,  SectionParagraph,
} from "~/components";

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
  max-width: 60%;

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
  border: 2px solid transparent;
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

export const InfoCardHeader = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  pointer-events: none;
  font-weight: 600;

  ${CardContainer}:hover & {
    color: blue;
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    font-weight: 600;
    width: 90%;
    letter-spacing: -1px;
  }

`;

export const InfoCardDesc = styled((props) => <SectionParagraph {...props} />)`
  margin: 0;
  pointer-events: none;
  width: 85%;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    width: 90%;
  }
`;