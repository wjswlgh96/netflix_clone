import styled from "styled-components";

import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";

import PlayButton from "./PlayButton";

const IntroWrapper = styled.div`
  width: 100%;
  font-size: 1vw;
  overflow: hidden;
`;

const IntroMainImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -2;
`;

const IntroGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 118%;
  background: rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: -1;
`;

const IntroContentWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 7em 0;
  color: #fff;
`;

const IntroLeftWrapper = styled.div`
  width: 90%;
  margin: 2em 4em;
`;

const IntroLeftTitleImg = styled.img`
  width: 40%;
  margin: 1em 0;
`;

const IntroLeftContent = styled.p`
  width: 50%;
  margin: 0.5em 0;
  font-size: 1.4em;
  line-height: 1.3em;
`;

const IntroLeftButtonDiv = styled.div`
  display: flex;
  margin: 2em 0;
  width: 50%;
`;

const IntroInfoButton = styled.button`
  width: 22%;
  background-color: #6d6d6d;
  color: white;
  border: 0;
  border-radius: 3px;
  padding: 0.4em 0;
  margin: 0.8em 0;
  justify-content: center;
  font-size: 1.2em;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const InfoImg = styled(InfoCircle)`
  width: 22%;
  margin-right: 1em;
`;

function MainIntro({ setIsModal = () => {} }) {
  const onClickSetIsModal = () => {
    setIsModal(true);
  };

  return (
    <IntroWrapper>
      <IntroMainImg src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZd4aI5vzh2GpYOXsxbg8h4DxLNAwOuoc8TqVZjIoS7UVEIEzO5MrJxdwOhDH0RTRF3kaVvnjnao6YjtqYMuKApuCMiF.webp?r=0b3" />
      <IntroGradient></IntroGradient>
      <IntroContentWrapper>
        <IntroLeftWrapper>
          <IntroLeftTitleImg src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSqeU_tqkM__XidBexJUImbWMTr169X5tiP_5OrAvUGIkFjA6_5ipS7PQujwrsMpOqg4cj-MT7_yb4xrcgD1TKvUd-DfSZiIftzu.webp?r=4f6" />
          <IntroLeftContent>
            활력과 욕망이 넘치는 이태원. 한 전과자와 친구들이 꿈을 위해
            <br />
            뭉쳤다.일단 시작은 술집 창업. 불합리한 세상, 막강한 적이
            <br />
            앞길을 막으면? 기를 쓰고 맞서 싸워야지!
          </IntroLeftContent>
          <IntroLeftButtonDiv>
            <PlayButton />
            <IntroInfoButton onClick={onClickSetIsModal}>
              <InfoImg />
              상세 정보
            </IntroInfoButton>
          </IntroLeftButtonDiv>
        </IntroLeftWrapper>
      </IntroContentWrapper>
    </IntroWrapper>
  );
}

export default MainIntro;
