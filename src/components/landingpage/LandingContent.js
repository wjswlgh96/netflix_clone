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
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1023px) {
    width: 90%;
    margin: 5rem auto;
  }

  @media screen and (max-width: 767px) {
    display: flex;
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
`;

const Title = styled.h1`
  width: 80%;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;

  @media screen and (max-width: 1023px) {
    width: 90%;
    font-size: 4.7rem;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  width: 80%;
  font-size: 1.17rem;
  white-space: pre-wrap;

  @media screen and (max-width: 1023px) {
    width: 90%;
    font-size: 2.4rem;
    font-weight: 300;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    text-align: center;
    font-size: 2.6rem;
    font-weight: 400;
  }
`;

const Image = styled.img`
  width: 80%;

  @media screen and (max-width: 1023px) {
    width: 95%;
  }

  @media screen and (max-width: 767px) {
    margin: auto;
    margin-bottom: 4rem;
    width: 80%;
  }
`;

export default function LandingContent({ title, subTitle, imageSrc }) {
  return (
    <Container>
      <Wrapper>
        <SourceContainer>
          <Image src={imageSrc} />
        </SourceContainer>
        <TextContainer>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}
