import styled from "styled-components";

import Selector from "./Selector";
import { footerData } from "../dummydata/dummyDatas";

const FooterMain = styled.footer`
  width: 98.95vw;
  background-color: black;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #757575;
  font-size: 1vw;
`;

const FooterWrapper = styled.div`
  width: 60%;
  margin: 4em 0;
`;

const FooterParagraph = styled.p`
  font-size: 1.2em;
  margin: 1em 0;
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
`;

const FooterLastDiv = styled.div`
  line-height: 1.5em;
  font-size: 1.02em;
`;

function Footer({ loginOpacity }) {
  return (
    <>
      {loginOpacity ? (
        <FooterMain style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
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
              <Selector isHeaders={false}></Selector>
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
              <Selector isHeaders={false}></Selector>
              <FooterParagraph style={{ fontSize: "1em" }}>
                넷플릭스 대한민국
              </FooterParagraph>
              <FooterLastDiv style={{ fontSize: ".9em" }}>
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

export default Footer;
