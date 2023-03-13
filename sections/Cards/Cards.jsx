import Card from "../../collections/Card/Card";
import { StyledDescription, StyledHeader, StyledSection } from "./elements";
import firstImage from "../../resources/1.png";
import secondImage from "../../resources/2.png";
import thirdImage from "../../resources/3.png";

const cardProps = [
  {
    title: "Brief",
    description: "Complete <b> brief writting or simple guidance </b> on what to include, we've got you covered.",
    image: firstImage
  },
  {
    title: "Search",
    description: "In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dlligence vetting.",
    image: secondImage
  },
  {
    title: "Pitch",
    description: "Comprehensive <b>pitch management</b>, including comms, diary managemtn and pitch hosting..",
    image: thirdImage
  },
];

export const Cards = ({ title, description }) => {
  return (
    <StyledSection>
      <StyledHeader>{title}</StyledHeader>
      <StyledDescription>{description}</StyledDescription>

      <Card cardProps={cardProps}/>
    </StyledSection>
  );
};
