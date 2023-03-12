// The Card to be exported goes here
import backgroundImg from "../../resources/video.png";
import firstImage from "../../resources/1.png";
import secondImage from "../../resources/2.png";
import thirdImage from "../../resources/3.png";

import Image from "next/image";

import {
  BoldedSpan,
  CardMain,
  CardContainer,
  CardImage,
  InfoCard,
  InfoCardDesc,
  InfoCardHeader,
  InfoDivImg,
  StyledDescription,
  StyledHeader,
  StyledInfoDiv,
  StyledSection,
} from "./elements";

export default function Card() {
  return (
    <StyledSection>
      <StyledHeader>Manged agency selection</StyledHeader>
      <StyledDescription>Strengthen your onboarding process</StyledDescription>

      <StyledInfoDiv>
        <InfoDivImg>
          <Image
            src={backgroundImg}
            alt={backgroundImg}
            width={350}
            height={550}
          ></Image>
        </InfoDivImg>

        <CardMain>
          <CardContainer>
            <CardImage>
              <Image
                src={firstImage}
                alt={firstImage}
                width={200}
                height={150}
              ></Image>
            </CardImage>
            <InfoCard>
              <InfoCardHeader>Brief</InfoCardHeader>
              <InfoCardDesc>
                Complete{" "}
                <BoldedSpan>brief writting or simple guidance</BoldedSpan> on
                what to include, we've got you covered.
              </InfoCardDesc>
            </InfoCard>
          </CardContainer>

          <CardContainer>
            <CardImage>
              <Image
                src={secondImage}
                alt={secondImage}
                width={200}
                height={150}
              ></Image>
            </CardImage>
            <InfoCard>
              <InfoCardHeader>Search</InfoCardHeader>
              <InfoCardDesc>
                In-depth agency search covering; <BoldedSpan>criteria matching,</BoldedSpan> door
                knocking and due-dlligence vetting.
              </InfoCardDesc>
            </InfoCard>
          </CardContainer>

          <CardContainer>
            <CardImage>
              <Image
                src={thirdImage}
                alt={thirdImage}
                width={200}
                height={150}
              ></Image>
            </CardImage>
            <InfoCard>
              <InfoCardHeader>Pitch</InfoCardHeader>
              <InfoCardDesc>
                Comprehensive <BoldedSpan >pitch management,</BoldedSpan> including comms, diary managemtn
                and pitch hosting.
              </InfoCardDesc>
            </InfoCard>
          </CardContainer>
        </CardMain>
      </StyledInfoDiv>
    </StyledSection>
  );
}
