import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  border-bottom: 8px solid #222;
`;

const Wrapper = styled.div`
  display: flex;
  width: 63%;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1023px) {
    width: 90%;

    margin: 5rem auto;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 5;
`;

const SourceContainer = styled.div`
  position: relative;
  display: flex;
  flex: 5;
  overflow: hidden;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 2.2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1023px) {
    width: 100%;
    font-size: 5rem;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 5.5rem;
    font-weight: bold;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  width: 60%;
  font-size: 1.05rem;

  @media screen and (max-width: 1023px) {
    width: 100%;
    font-size: 2.6rem;
    font-weight: 300;
  }

  @media screen and (max-width: 767px) {
    font-size: 2.9rem;
    width: 72%;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 85%;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin: auto;
    margin-bottom: 5rem;
    width: 80%;
  }
`;

const Video = styled.video`
  position: absolute;
  width: 62.1%;
  z-index: -5;
  left: 11%;
  top: 21%;

  @media screen and (max-width: 1023px) {
    width: 72.5%;
    left: 13.4%;
  }

  @media screen and (max-width: 767px) {
    width: 58%;
    left: 20.8%;
    top: 19%;
  }

  ${(props) => {
    if (props.isThird) {
      return `
        width: 55%; 
        top: 11%;
        left: 15%;

        @media screen and (max-width: 1023px) {
          width: 65%;
          left: 17%;
        }

        @media screen and (max-width: 767px) {
          width: 48%;
          left: 28%;
          top: 10%;
        }
      `;
    }
  }}
`;

const Source = styled.source`
  position: relative;
`;

export default function LandingVideo({
  isThird,
  title,
  subTitle,
  imageSrc,
  videoSrc,
}) {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TextContainer>
        <SourceContainer>
          <Image src={imageSrc} />
          <Video isThird={isThird} autoPlay playsInline muted loop>
            <Source src={videoSrc} type="video/mp4" />
          </Video>
        </SourceContainer>
      </Wrapper>
    </Container>
  );
}
