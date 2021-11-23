import styled from "styled-components";

import LandingForm from "./LandingForm";

const Container = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`;

const ImageWrapper = styled.div``;

const Image = styled.img``;

const ImageGradient = styled.div`
  position: absolute;
  height: 67.4%;
  top: 0;
  left: 0;
  border-bottom: 8px solid #222;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 8rem auto 10rem;
  color: white;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 2.8rem;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export default function LandingIntro() {
  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          <Image src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/4b9902df-a2eb-44ba-bc46-734472bdf025/KR-ko-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
          <ImageGradient />
        </ImageWrapper>
      </ImageContainer>
      <ContentContainer>
        <Title>
          영화, TV 프로그램을
          <br />
          무제한으로.
        </Title>
        <SubTitle>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </SubTitle>
        <LandingForm />
      </ContentContainer>
    </Container>
  );
}
