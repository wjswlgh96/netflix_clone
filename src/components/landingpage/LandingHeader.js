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
`;

const LogoContainer = styled.div``;

const LogoLink = styled(Link)``;

const LogoImage = styled.img`
  width: 9rem;
`;

const NavContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  margin-right: 1rem;
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
`;

export default function LandingHeader() {
  return (
    <Container>
      <LogoContainer>
        <LogoLink>
          <LogoImage src={Logo} />
        </LogoLink>
      </LogoContainer>
      <NavContainer>
        <NavSelector>
          <NavOption value="한국어">한국어</NavOption>
          <NavOption value="영어">English</NavOption>
        </NavSelector>
        <LoginButton value="로그인">로그인</LoginButton>
      </NavContainer>
    </Container>
  );
}
