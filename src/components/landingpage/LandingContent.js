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
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 5.1;
`;

const SourceContainer = styled.div`
  position: relative;
  display: flex;
  flex: 4.9;
`;

const Title = styled.h1`
  width: 80%;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  white-space: pre;
`;

const SubTitle = styled.div`
  width: 80%;
  font-size: 1.2rem;
  white-space: pre;
`;

const Image = styled.img`
  width: 80%;
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
