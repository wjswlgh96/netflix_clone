import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../images/mainlogo.png";
import { headerList } from "../dummydata/dummyDatas";

import { Search } from "@styled-icons/boxicons-regular/Search";
import { BellFill } from "@styled-icons/bootstrap/BellFill";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  width: 100vw;
  font-size: 1vw;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background-color: transparent;
  padding: 0 3em;
  transition: background-color 0.2s ease-in-out;

  ${(props) => {
    if (props.isScroll) {
      return `
            background-color: black;
      `;
    }
  }}
`;

const LogoWrapper = styled.div`
  width: 8%;
  margin: 0 2em 0 0;
  line-height: 7em;
`;

const LogoLink = styled(Link)`
  height: 100%;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const MenuWrapper = styled.div`
  width: 80%;
  color: #e5e5e5;
  margin: 0 0 0 0;
  line-height: 5.3em;
`;

const MenuUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

const MenuLi = styled.li`
  list-style: none;
  font-size: 0.95em;
  font-weight: 350;
  margin: 0 1em;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const MenuNaviWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 10%;
  line-height: 5em;
`;

const SearchIcons = styled(Search)`
  width: 15%;
  height: 100%;
`;

const BellIcons = styled(BellFill)`
  width: 15%;
  height: 100%;
`;

const KidsLink = styled(Link)`
  text-decoration: none;
  font-size: 0.95em;
  font-weight: 350;
  color: #ffffff;
`;

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [isScroll]);

  return (
    <HeaderContainer>
      <HeaderWrapper isScroll={isScroll}>
        <LogoWrapper>
          <LogoLink to="/">
            <LogoImg src={Logo} />
          </LogoLink>
        </LogoWrapper>
        <MenuWrapper>
          <MenuUl>
            {headerList.map((el, idx) => {
              return <MenuLi key={idx}>{el}</MenuLi>;
            })}
          </MenuUl>
        </MenuWrapper>
        <MenuNaviWrapper>
          <SearchIcons />
          <KidsLink to="/">키즈</KidsLink>
          <BellIcons />
        </MenuNaviWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
