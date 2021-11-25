import styled from "styled-components";

import { footerData } from "../dummydata/dummyDatas";

const FooterMain = styled.footer`
  width: 100%;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #757575;

  ${(props) => {
    if (props.loginOpacity) {
      return `
      background-color: rgba(0, 0, 0, 0.7);

      @media screen and (max-width: 767px) {
        background-color: black;
      }
      `;
    }
  }}
`;

const FooterWrapper = styled.div`
  width: 60%;
  margin: 4em 0;

  @media screen and (max-width: 1023px) {
    width: 80%;
    margin: 6em 0;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

const FooterParagraph = styled.p`
  font-size: 1.2em;
  margin: 1em 0;

  @media screen and (max-width: 1023px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 767px) {
    font-size: 2em;
    margin: 2em 0;
  }
`;

const FooterUl = styled.ul`
  width: 100%;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3em;
`;

const FooterLi = styled.li`
  list-style: none;
  width: 25%;
  margin-bottom: 2em;

  &: hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8em;
  }
`;

const FooterLastDiv = styled.div`
  line-height: 1.5em;
  font-size: 1.02rem;

  @media screen and (max-width: 1023px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.6em;
  }
`;

const NavSelector = styled.select`
  width: 15%;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #aaa;
  border-radius: 2px;
  color: white;
  margin: 0 2rem 1.1rem 0;
  padding: 1rem 0.6rem 1rem 2.3rem;
  font-size: 1.4rem;

  @media screen and (max-width: 1023px) {
    padding: 2rem 0 2rem 3rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 767px) {
    width: 20%;
    padding: 2rem 0 2rem 4rem;
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`;

const NavOption = styled.option``;

export default function Footer({ loginOpacity }) {
  return (
    <>
      {loginOpacity ? (
        <FooterMain>
          <FooterContainer loginOpacity={loginOpacity}>
            <FooterWrapper>
              <FooterParagraph>
                질문이 있으신가요? 문의 전화: 080-001-9587
              </FooterParagraph>
              <FooterUl>
                {footerData.map((el, idx) => {
                  return <FooterLi key={idx}>{el}</FooterLi>;
                })}
              </FooterUl>
              <NavSelector>
                <NavOption value="한국어">한국어</NavOption>
                <NavOption value="English">English</NavOption>
              </NavSelector>
              <FooterParagraph>넷플릭스 대한민국</FooterParagraph>
              <FooterLastDiv>
                넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                제2018-서울종로-0426호 전화번호: 080-001-9587
                <br />
                대표: 레지널드 숀 톰프슨
                <br />
                이메일 주소: korea@netflix.com
                <br />
                주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
                20층 우편번호 03161
                <br />
                사업자등록번호: 165-87-00119
                <br />
                클라우드 호스팅: Amazon Web Services Inc.
                <br />
                공정거래위원회 웹사이트
              </FooterLastDiv>
            </FooterWrapper>
          </FooterContainer>
        </FooterMain>
      ) : (
        <FooterMain>
          <FooterContainer>
            <FooterWrapper>
              <FooterParagraph>
                질문이 있으신가요? 문의 전화: 080-001-9587
              </FooterParagraph>
              <FooterUl>
                {footerData.map((el, idx) => {
                  return <FooterLi key={idx}>{el}</FooterLi>;
                })}
              </FooterUl>
              <NavSelector>
                <NavOption value="한국어">한국어</NavOption>
                <NavOption value="English">English</NavOption>
              </NavSelector>
              <FooterParagraph>넷플릭스 대한민국</FooterParagraph>
              <FooterLastDiv>
                넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                제2018-서울종로-0426호 전화번호: 080-001-9587
                <br />
                대표: 레지널드 숀 톰프슨
                <br />
                이메일 주소: korea@netflix.com
                <br />
                주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
                20층 우편번호 03161
                <br />
                사업자등록번호: 165-87-00119
                <br />
                클라우드 호스팅: Amazon Web Services Inc.
                <br />
                공정거래위원회 웹사이트
              </FooterLastDiv>
            </FooterWrapper>
          </FooterContainer>
        </FooterMain>
      )}
    </>
  );
}
