import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  height: 101.4vw;
`;

const ImageGradient = styled.div`
  position: absolute;
  height: 101.7vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export default function LoginBackground() {
  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          <Image src="https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/780e6f4e-6f56-4926-82f5-ee222fb056c0/KR-ko-20211115-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </ImageWrapper>
        <ImageGradient />
      </ImageContainer>
    </Container>
  );
}
