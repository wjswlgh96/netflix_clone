import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../images/mainlogo.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
  background-color: transparent;
  padding-top: 1rem;

  @media screen and (max-width: 1023px) {
    width: 90%;
    margin: 1.5rem auto;
  }

  @media screen and (max-width: 767px) {
    margin: 2rem auto;
  }
`;

const LogoContainer = styled.div``;

const LogoLink = styled(Link)``;

const LogoImage = styled.img`
  width: 9rem;

  @media screen and (max-width: 1023px) {
    width: 14rem;
  }

  @media screen and (max-width: 767px) {
    width: 16rem;
  }
`;

const NavContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  margin-right: 1rem;

  @media screen and (max-width: 1023px) {
    width: 30%;
  }

  @media screen and (max-width: 767px) {
    width: 50%;
  }
`;

const NavSelector = styled.select`
  width: 40%;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #aaa;
  border-radius: 2px;
  color: white;
  margin-right: 2rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.75rem;

  @media screen and (max-width: 1023px) {
    width: 45%;
    padding: 0.8rem 1.4rem;
    font-size: 1.3rem;
    margin-right: 3rem;
  }

  @media screen and (max-width: 767px) {
    width: 40%;
    padding: 1rem 1.4rem;
    font-size: 1.8rem;
  }
`;

const NavOption = styled.option`
  font-size: 0.66rem;
`;

const LoginButton = styled.button`
  width: 35%;
  background-color: red;
  color: white;
  border: 0;
  border-radius: 0.2rem;
  padding: 0 0.6rem;
  font-size: 0.8rem;

  @media screen and (max-width: 1023px) {
    width: 40%;
    padding: 0.8rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    width: 35%;
    font-size: 1.8rem;
  }
`;

export default function LandingHeader() {
  const onClick = (e) => {
    e.preventDefault();
    window.location.replace("/login");
  };

  return (
    <Container>
      <LogoContainer>
        <LogoLink to="/">
          <LogoImage src={Logo} />
        </LogoLink>
      </LogoContainer>
      <NavContainer>
        <NavSelector>
          <NavOption value="한국어">한국어</NavOption>
          <NavOption value="영어">English</NavOption>
        </NavSelector>
        <LoginButton onClick={onClick} value="로그인">
          로그인
        </LoginButton>
      </NavContainer>
    </Container>
  );
}
