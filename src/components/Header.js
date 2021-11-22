import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../images/mainlogo.png";
import { headerList } from "../dummydata/dummyDatas";

import { Search } from "@styled-icons/boxicons-regular/Search";
import { BellFill } from "@styled-icons/bootstrap/BellFill";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  z-index: 5;
  position: fixed;
  justify-content: center;

  ${(props) => {
    if (props.isScroll) {
      return `
        background-color: black;
        transition: all 0.2s ease-in-out;
      `;
    } else {
      return `
        background-color: transparent;
        transition: all 0.2s ease-in-out;
      `;
    }
  }}
`;

const Wrapper = styled.div`
  width: 92.5%;
  margin: 1.5rem auto;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

const Image = styled.img`
  width: 73%;
`;

const LogoLink = styled(Link)``;

const MenuWrapper = styled.div`
  flex: 6;
  width: 100%;
`;

const MenuButton = styled.span`
  color: #d3d3d3;
  margin-right: 1.5rem;
  line-height: 2.5rem;

  &: hover {
    cursor: pointer;
    color: #b3b3b3;
  }
`;

const NavWrapper = styled.div`
  width: 100%;
  flex: 3;
  color: white;
  white-space: nowrap;
  text-align: right;
`;

const NavButton = styled.div`
  display: inline;
  width: 15%;
  line-height: 2rem;
  margin-right: 2rem;
`;

const NavSearch = styled(Search)`
  width: 10%;
  display: inline;
  margin-right: 2rem;
`;

const NavBell = styled(BellFill)`
  width: 10%;
  display: inline;
  margin-right: 1rem;
`;

export default function Header() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  });

  useEffect(() => {
    if (scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [scrollY]);

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <ImageWrapper>
          <LogoLink to="/main">
            <Image src={Logo} />
          </LogoLink>
        </ImageWrapper>
        <MenuWrapper>
          {headerList.map((el, idx) => {
            return <MenuButton key={idx}>{el}</MenuButton>;
          })}
        </MenuWrapper>
        <NavWrapper>
          <NavSearch size="1.7vw" />
          <NavButton>키즈</NavButton>
          <NavBell size="1.8vw" />
        </NavWrapper>
      </Wrapper>
    </Container>
  );
}
