import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../images/mainlogo.png";
import { headerList } from "../dummydata/dummyDatas";

import { Search } from "@styled-icons/boxicons-regular/Search";
import { BellFill } from "@styled-icons/bootstrap/BellFill";
import { ArrowDown } from "@styled-icons/evaicons-solid/ArrowDown";

const Container = styled.div`
  width: 98vw;
  background-color: transparent;
  display: flex;
  z-index: 5;
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

  ${(props) => {
    if (props.isMain) {
      return `
        position: fixed;
      `;
    } else {
      return `
        position: static;
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
  position: relative;
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

  &: hover {
    cursor: pointer;
    color: #b3b3b3;
  }
`;

const NavSearch = styled(Search)`
  width: 10%;
  display: inline;
  margin-right: 2rem;

  &: hover {
    cursor: pointer;
    color: #b3b3b3;
  }
`;

const NavBell = styled(BellFill)`
  width: 10%;
  display: inline;
  margin-right: 1rem;

  &: hover {
    cursor: pointer;
    color: #b3b3b3;
  }
`;

const DownImg = styled(ArrowDown)`
  position: relative;
  color: white;
  width: 5%;
  top: -0.15vw;
  margin: auto;
`;

const MobileMenuContainer = styled.div`
  width: 30%;
  position: fixed;
  left: 1.5%;
  top: 4%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.2s linear;

  @keyframs fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }
`;

const MobileTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 2px solid white;
`;

const MobileMenuWrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: black;
`;

const MobileMenuContent = styled.div`
  width: 100%;
  color: white;
  margin: 2.5rem 0;
  font-size: 2rem;

  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    opacity: 0.5;
  }
`;

export default function Header({ isScroll, isMain }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const containerScreenX = useRef();

  const getContainerWidth = () => {
    const width = containerScreenX.current.offsetWidth;

    if (width <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    getContainerWidth();
    window.addEventListener("resize", getContainerWidth);

    return () => {
      window.removeEventListener("resize", getContainerWidth);
    };
  }, []);

  const onMouseEnter = (e) => {
    e.preventDefault();
    setIsMenuModal(true);
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    let time = 0;

    const timeInterval = setInterval(() => {
      time += 50;

      if (isHoverMenu) {
        clearInterval(timeInterval);
      }

      if (time >= 1500) {
        setIsMenuModal(false);
        clearInterval(timeInterval);
      }
    }, 10);
  };

  const onHoverMenu = (e) => {
    e.preventDefault();
    setIsHoverMenu(true);
  };

  const onLeaveMenu = (e) => {
    e.preventDefault();
    setIsHoverMenu(false);
  };

  return (
    <Container ref={containerScreenX} isScroll={isScroll} isMain={isMain}>
      <Wrapper>
        <ImageWrapper>
          <LogoLink to="/main">
            <Image src={Logo} />
          </LogoLink>
        </ImageWrapper>
        <MenuWrapper>
          {isMobile ? (
            <>
              <MenuButton
                style={{ marginLeft: "2rem", marginRight: ".5rem" }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                메뉴
              </MenuButton>
              <DownImg size="2.2rem" />
            </>
          ) : (
            headerList.map((el, idx) => {
              if (idx === headerList.length - 1) {
                return (
                  <Link key={idx} to="/mylist">
                    <MenuButton>{el}</MenuButton>
                  </Link>
                );
              } else if (idx === 0) {
                return (
                  <Link key={idx} to="/main">
                    <MenuButton>{el}</MenuButton>
                  </Link>
                );
              } else {
                return <MenuButton key={idx}>{el}</MenuButton>;
              }
            })
          )}
        </MenuWrapper>
        <NavWrapper>
          <NavSearch size="1.7vw" />
          <NavButton>키즈</NavButton>
          <NavBell size="1.8vw" />
        </NavWrapper>
      </Wrapper>
      {isMenuModal || isHoverMenu ? (
        <MobileMenuContainer
          onMouseEnter={onHoverMenu}
          onMouseLeave={onLeaveMenu}
        >
          <MobileTitleWrapper>
            <DownImg
              size="3.5rem"
              style={{
                width: "50%",
                top: "1.45vw",
                transform: "rotate(180deg)",
              }}
            />
          </MobileTitleWrapper>
          <MobileMenuWrapper>
            {headerList.map((el, idx) => {
              if (idx === headerList.length - 1) {
                return (
                  <Link key={idx} to="/mylist">
                    <MobileMenuContent>{el}</MobileMenuContent>
                  </Link>
                );
              } else if (idx === 0) {
                return (
                  <Link key={idx} to="/main">
                    <MobileMenuContent>{el}</MobileMenuContent>
                  </Link>
                );
              } else {
                return <MobileMenuContent key={idx}>{el}</MobileMenuContent>;
              }
            })}
          </MobileMenuWrapper>
        </MobileMenuContainer>
      ) : null}
    </Container>
  );
}
