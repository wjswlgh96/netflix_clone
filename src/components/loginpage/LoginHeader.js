import styled from "styled-components";

import Logo from "../../images/mainlogo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 1rem 2rem;
`;

const Image = styled.img`
  width: 13.5%;
`;

export default function LoginHeader() {
  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} />
      </ImageContainer>
    </Container>
  );
}
