import styled from "styled-components";

import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { InfoCircleFill } from "@styled-icons/bootstrap";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const IntroImageWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: black;
`;

const IntroImage = styled.img`
  width: 100%;
`;

const LeftImageGradient = styled.div`
  position: absolute;
  height: 48.1vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.9) 0,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, 0.9) 100%
  );

  @media screen and (max-width: 767px) {
    height: 50vw;
  }
`;

const TopImageGradient = styled.div`
  position: absolute;
  height: 48.1vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, 1) 100%
  );

  @media screen and (max-width: 767px) {
    height: 50vw;
  }
`;

const IntroContentWrapper = styled.div`
  width: 92.4%;
  display: flex;
  margin: 10rem auto 7rem;
`;

const IntroLeftWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

const IntroTitleImageWrapper = styled.div`
  width: 40%;
  margin-bottom: 1.5rem;
`;

const IntroTitleImage = styled.img`
  width: 100%;
`;

const IntroTitle = styled.h1`
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const IntroSubTitle = styled.p`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.7rem;
  margin-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const PlayButton = styled.button`
  width: 8%;
  display: flex;
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  border-radius: 4px;
  margin-right: 1rem;

  :hover {
    cursor: pointer;
    background-color: #bbbbbb;
  }

  @media screen and (max-width: 767px) {
    width: 10%;
  }
`;

const PlayImage = styled(PlayFill)`
  width: 40%;
  margin-right: 0.8rem;
  color: black;
`;

const InfoButton = styled.button`
  width: 11%;
  display: flex;
  background-color: #6d6d6eb3;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    background-color: #6b6b6c91;
  }

  @media screen and (max-width: 767px) {
    width: 13%;
  }
`;

const InfoImage = styled(InfoCircleFill)`
  width: 40%;
`;

export default function MainIntro({ setIsModal, setCurrIdx }) {
  const onClickPlayButton = (e) => {
    e.preventDefault();

    window.location.replace("/play");
  };

  const onClickInfoButton = (e) => {
    e.preventDefault();
    setIsModal(true);
    setCurrIdx(2);
  };

  return (
    <Container>
      <IntroImageWrapper>
        <IntroImage src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc2AN8RFM8sq7AdbolNUuw2XWwBqoTooz6xm_pBig0zU8NhyTCJakTSBB9hdApgjzA_rHcUw6JNXkcH6kg5XEq387SY4.webp?r=d0c" />
        <LeftImageGradient />
        <TopImageGradient />
      </IntroImageWrapper>
      <IntroContentWrapper>
        <IntroLeftWrapper>
          <IntroTitleImageWrapper>
            <IntroTitleImage src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcWFxYV-RVEOXrksQw8Nk5GR2W6gZllaGGk6qxPHfATda741irY4Wh3ua_9hEu689YU3J6Zt1E4cFWZCQM8YM3c4JovXPlfFbaW4i9Baw8o5Qq8NsBuR0q7PcAEkxT_aWjPbR9ntVm0JGbEbpCabgSL_SqV5IADFhq1vhISBhQYaqw.webp?r=40f" />
          </IntroTitleImageWrapper>
          <IntroTitle>오늘 대한민국에서 콘텐츠 순위 1위</IntroTitle>
          <IntroSubTitle>
            어느 날 기이한 존재로부터 지옥행을 선고받은 사람들. 충격과
            <br />
            두려움에 휩싸인 도시에 대혼란의 시대가 도래한다. 신의 심판을
            <br />
            외치며 세를 확장하려는 종교단체와 진실을 파헤치는 자들의
            <br />
            이야기.
          </IntroSubTitle>
          <ButtonWrapper>
            <PlayButton onClick={onClickPlayButton}>
              <PlayImage size="2vw" />
              재생
            </PlayButton>
            <InfoButton onClick={onClickInfoButton}>
              <InfoImage size="1.8vw" />
              상세 정보
            </InfoButton>
          </ButtonWrapper>
        </IntroLeftWrapper>
      </IntroContentWrapper>
    </Container>
  );
}
