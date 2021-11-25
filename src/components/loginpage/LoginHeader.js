import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../images/mainlogo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    background-color: black;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 1rem 2rem;

  @media screen and (max-width: 1023px) {
    margin: 1.7rem 2.3rem;
  }
`;

const Image = styled.img`
  width: 13.5%;

  @media screen and (max-width: 1023px) {
    width: 18.5%;
  }

  @media screen and (max-width: 767px) {
    width: 28%;
  }
`;

const ImageLink = styled(Link)``;

export default function LoginHeader() {
  return (
    <Container>
      <ImageContainer>
        <ImageLink to="/">
          <Image src={Logo} />
        </ImageLink>
      </ImageContainer>
    </Container>
  );
}
