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
  width: 80%;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  width: 80%;
  font-size: 1.3rem;
`;

const Image = styled.img`
  width: 85%;
`;

const Video = styled.video`
  position: absolute;
  width: 62.1%;
  z-index: -5;
  left: 11%;
  top: 21%;
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
        {isThird ? (
          <SourceContainer>
            <Image src={imageSrc} />
            <Video
              style={{ width: "55%", top: "11%", left: "15%" }}
              autoPlay
              playsInline
              muted
              loop
            >
              <Source src={videoSrc} type="video/mp4" />
            </Video>
          </SourceContainer>
        ) : (
          <SourceContainer>
            <Image src={imageSrc} />
            <Video autoPlay playsInline muted loop>
              <Source src={videoSrc} type="video/mp4" />
            </Video>
          </SourceContainer>
        )}
      </Wrapper>
    </Container>
  );
}
