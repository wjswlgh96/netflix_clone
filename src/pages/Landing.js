import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../images/mainlogo.png";

import Selector from "../components/Selector";
import { accordionData } from "../dummydata/dummyDatas";
import LandingForm from "../components/LadingForm";
import Footer from "../components/Footer";

const LandingPageContainer = styled.div`
  width: 100vw;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: transparent;
  position: relative;
  margin: 0 3.3rem;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  display: flex;
  padding-top: 1.3rem;
`;

const HeaderLogoWrapper = styled.span`
  margin-right: auto;
`;

const HeaderLogo = styled.img`
  width: 9rem;
  height: 3.1rem;
`;

const LogoLink = styled(Link)`
  background-color: transparent;
  min-height: 5rem;
`;

const HeaderLoginWrapper = styled.div`
  margin-top: 0.72rem;
  margin-right: 7rem;
`;

const HeaderLogin = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  border-radius: 5px;
  background-color: red;
  padding: 8px 17px;
  color: white;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const ContentImageContainer = styled.div`
  overflow: hidden;
`;

const ContentImageWrapper = styled.div`
  position: absolute;
  top: -3rem;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 46.875rem;
  transform: none;
  object-fit: cover;
`;

const ImageGradient = styled.div`
  height: 46.875rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 8px solid #222;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 7rem 0;
  max-width: 900px;
  height: 24.3rem;
  margin: 0 auto;
  z-index: 1;
`;

const ContentDiv = styled.div`
  z-index: 1;
  margin: 0 1.5rem;
  text-align: center;
  padding-bottom: 0.1rem;
  background-color: transparent;
`;

const ContentTitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  margin: 1rem 14rem;
  line-height: 4rem;
  color: #fff;

  ${(props) => {
    if (props.margin) {
      return `
        margin: ${props.margin.top} ${props.margin.right} ${props.margin.bottom} ${props.margin.left};
      `;
    }
  }}
`;

const ContentSubTitle = styled.h2`
  font-size: 1.625rem;
  margin: auto;
  font-weight: 350;
  color: #fff;

  ${(props) => {
    if (props.margin) {
      return `
        margin: ${props.margin.top} ${props.margin.right} ${props.margin.bottom} ${props.margin.left};
      `;
    }
  }}
`;

const SubContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 10;
  background-color: black;
  border-bottom: 8px solid #222;
  overflow-x: hidden;
`;

const SubContentDiv = styled.div`
  padding: 11rem 0 0 0;

  ${(props) => {
    if (props.padding) {
      return `
        padding: ${props.padding.top} ${props.padding.right} ${props.padding.bottom} ${props.padding.left};
      `;
    }
  }}

  ${(props) => {
    if (props.margin) {
      return `
        margin: ${props.margin.top} ${props.margin.right} ${props.margin.bottom} ${props.margin.left};
      `;
    }
  }}
`;

const SubContentImageDiv = styled.div`
  padding: 0 7rem 3rem 0;
  height: 31.25rem;

  ${(props) => {
    if (props.padding) {
      return `
        padding: ${props.padding.top} ${props.padding.right} ${props.padding.bottom} ${props.padding.left};
      `;
    }
  }}
`;

const SubContentVideoDiv = styled.div`
  z-index: 0;
  position: relative;
  top: -65%;
  left: 19%;
`;

const SubContentVideo = styled.video`
  width: 58%;
`;

const SubContentImage = styled.img`
  position: relative;
  margin: 2rem 0 0rem 4rem;
  width: 77%;
  z-index: 2;

  ${(props) => {
    if (props.width) {
      return `
        width: ${props.width}
      `;
    }
  }}
  ${(props) => {
    if (props.margin) {
      return `
        margin: ${props.margin.top} ${props.margin.right} ${props.margin.bottom} ${props.margin.left};
      `;
    }
  }}
`;

const AccordionUl = styled.ul`
  width: 100%;
  margin: 2rem auto;
`;

const AccordionLi = styled.li`
  display: list-item;
  width: 100%;
  list-style-type: none;
  background-color: #303030;
  margin: 0 0 0.6rem 0;
`;

const AccordionButton = styled.button`
  display: inline;
  padding: 1.4rem 2.2rem 1.4rem 1.5rem;
  width: 100%;
  font-weight: 350;
  font-size: 1.7rem;
  border: 0;
  background-color: #303030;
  color: white;
  text-align: left;

  &: hover {
    cursor: pointer;
  }
`;

const AccordionPlus = styled.span`
  position: relative;
  float: right;
`;

const AccordionClickDiv = styled.div`
  max-height: 0;
  border: 0;
  border-top: 1px solid black;
  background-color: #303030;
  padding: 0;
  heightstyle: none;
  transition: max-height 0.2s ease-in-out;

  ${(props) => {
    if (props.isClick && props.currIndex === props.idx) {
      return `
        padding: 1.4rem 2.2rem 1.4rem 1.5rem;
        max-height: 500px;
      `;
    }
  }}
`;

const AccordionClickSpan = styled.span`
  display: none;
  font-weight: 300;
  max-width: 813px;
  font-size: 1.7rem;
  text-align: left;
  white-space: pre-line;
  color: white;

  ${(props) => {
    if (props.isClick && props.currIndex === props.idx) {
      return `
        display: inline;
      `;
    }
  }}
`;

function Landing() {
  const [isClick, setIsClick] = useState(false);
  const [currIndex, setCurrIndex] = useState(-1);

  const onClick = () => {
    setIsClick((curr) => !curr);
  };

  const onFocus = (idx) => {
    setCurrIndex(idx);
  };

  const onBlur = () => {
    setCurrIndex(-1);
  };

  return (
    <>
      <LandingPageContainer>
        <HeaderContainer>
          <HeaderWrapper>
            <HeaderLogoWrapper>
              <LogoLink to="/">
                <HeaderLogo src={Logo} />
              </LogoLink>
            </HeaderLogoWrapper>
            <Selector isHeaders={true}></Selector>
            <HeaderLoginWrapper>
              <HeaderLogin to="/login">로그인</HeaderLogin>
            </HeaderLoginWrapper>
          </HeaderWrapper>
        </HeaderContainer>
        <ContentContainer>
          <ContentImageContainer>
            <ContentImageWrapper>
              <ContentImage src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/4b9902df-a2eb-44ba-bc46-734472bdf025/KR-ko-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
              <ImageGradient></ImageGradient>
            </ContentImageWrapper>
          </ContentImageContainer>
          <ContentWrapper>
            <ContentDiv>
              <ContentTitle>영화, TV 프로그램을 무제한으로.</ContentTitle>
            </ContentDiv>
            <ContentDiv>
              <ContentSubTitle>
                다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
              </ContentSubTitle>
            </ContentDiv>
            <ContentDiv>
              <LandingForm></LandingForm>
            </ContentDiv>
          </ContentWrapper>
        </ContentContainer>
        <SubContentWrapper>
          <SubContentDiv
            padding={{ top: "11rem", right: "0", bottom: "0", left: "6rem" }}
          >
            <ContentTitle
              margin={{ top: "0", right: "0", bottom: "1rem", left: "5rem" }}
            >
              TV로 즐기세요.
            </ContentTitle>
            <ContentSubTitle
              margin={{ top: "0", right: "0", bottom: "0", left: "5rem" }}
            >
              스마트 TV, PlayStation, Xbox, Chromecast,
              <br /> Apple TV, 블루레이 플레이어 등 다양한 <br />
              디바이스에서 시청하세요.
            </ContentSubTitle>
          </SubContentDiv>
          <SubContentImageDiv
            padding={{ top: "0", right: "0", bottom: "1rem", left: "3rem" }}
          >
            <SubContentImage src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            <SubContentVideoDiv>
              <SubContentVideo autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source>
              </SubContentVideo>
            </SubContentVideoDiv>
          </SubContentImageDiv>
        </SubContentWrapper>
        <SubContentWrapper>
          <SubContentImage
            width={"34%"}
            style={{ margin: "1rem 1rem 3rem 0" }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
          <SubContentDiv
            padding={{ top: "8rem", right: "10rem", bottom: "0", left: "5rem" }}
          >
            <ContentTitle
              margin={{ top: "0", right: "0", bottom: "1rem", left: "0" }}
            >
              즐겨 보는 콘텐츠를 저장해
              <br />
              오프라인으로 시청하세요.
            </ContentTitle>
            <ContentSubTitle>
              간편하게 저장하고 빈틈없이 즐겨보세요.
            </ContentSubTitle>
          </SubContentDiv>
        </SubContentWrapper>
        <SubContentWrapper>
          <SubContentDiv
            padding={{ top: "8rem", right: "0", bottom: "0", left: "6rem" }}
          >
            <ContentTitle
              margin={{ top: "0", right: "0", bottom: "1rem", left: "0" }}
            >
              다양한 디바이스에서 <br />
              시청하세요.
            </ContentTitle>
            <ContentSubTitle
              margin={{ top: "0", right: "0", bottom: "0", left: "0" }}
            >
              각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북,
              <br /> TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀
              <br /> 없습니다.
            </ContentSubTitle>
          </SubContentDiv>
          <SubContentImage
            width={"37%"}
            style={{ margin: "3rem 0 4rem 5rem" }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          />
        </SubContentWrapper>
        <SubContentWrapper>
          <SubContentImage
            width={"37%"}
            style={{ margin: "4rem 1rem 1rem 6rem" }}
            src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
          />
          <SubContentDiv
            padding={{
              top: "8rem",
              right: "7rem",
              bottom: "8rem",
              left: "2rem",
            }}
          >
            <ContentTitle
              margin={{ top: "0", right: "0", bottom: "1rem", left: "0" }}
            >
              어린이 전용 프로필을
              <br />
              만들어 보세요.
            </ContentTitle>
            <ContentSubTitle
              margin={{ top: "0", right: "0", bottom: "0", left: "0" }}
            >
              자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는
              <br />
              모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스
              <br />
              회원이라면 무료입니다.
            </ContentSubTitle>
          </SubContentDiv>
        </SubContentWrapper>
        <SubContentWrapper>
          <SubContentDiv style={{ padding: "4rem 0" }}>
            <ContentTitle style={{ textAlign: "center" }}>
              자주 묻는 질문
            </ContentTitle>
            <AccordionUl>
              {accordionData.map((el, idx) => {
                return (
                  <AccordionLi key={idx}>
                    <AccordionButton
                      onClick={onClick}
                      onFocus={() => onFocus(idx)}
                      onBlur={onBlur}
                    >
                      {el[0]}
                      {isClick && currIndex === idx ? (
                        <AccordionPlus>-</AccordionPlus>
                      ) : (
                        <AccordionPlus>+</AccordionPlus>
                      )}
                    </AccordionButton>
                    <AccordionClickDiv
                      currIndex={currIndex}
                      idx={idx}
                      isClick={isClick}
                    >
                      <AccordionClickSpan
                        currIndex={currIndex}
                        idx={idx}
                        isClick={isClick}
                      >
                        {el[1]}
                      </AccordionClickSpan>
                    </AccordionClickDiv>
                  </AccordionLi>
                );
              })}
            </AccordionUl>
            <LandingForm />
          </SubContentDiv>
        </SubContentWrapper>
        <Footer></Footer>
      </LandingPageContainer>
    </>
  );
}

export default Landing;
