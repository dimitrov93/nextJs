import styled from "styled-components";
import {
  SectionBigHeading,
  SectionSubheading,
  CardsContainer
} from "~/components";

export const StyledSection = styled((props) => <CardsContainer {...props} />)`
   @media (max-width: 1024px) {
    max-width: 60%;
  }
`


export const StyledHeader = styled((props) => <SectionBigHeading {...props} />)`
  margin: 1rem 0px 0px 0px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    margin: 0;
  text-align: center;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`