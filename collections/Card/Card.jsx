// The Card to be exported goes here
import backgroundImg from "../../resources/video.png";
import Image from "next/image";

import {
  CardMain,
  CardContainer,
  CardImage,
  InfoCard,
  InfoCardDesc,
  InfoCardHeader,
  InfoDivImg,
  StyledInfoDiv,
} from "./elements";

export default function Card({ cardProps }) {
  return (
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
        {cardProps.map((x, i) => {
          return (
            <CardContainer key={i}>
              <CardImage>
                <Image
                  src={x.image}
                  alt={x.image}
                  width={200}
                  height={150}
                ></Image>
              </CardImage>
              <InfoCard>
                <InfoCardHeader>{x.title}</InfoCardHeader>
                <InfoCardDesc dangerouslySetInnerHTML={{__html: x.description}}></InfoCardDesc>
              </InfoCard>
            </CardContainer>
          );
        })}

      </CardMain>
    </StyledInfoDiv>
  );
}
