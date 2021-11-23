import { useState } from "react";
import styled from "styled-components";

import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { Like } from "@styled-icons/boxicons-regular/Like";
import { Dislike } from "@styled-icons/boxicons-regular/Dislike";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { SpeakerMute } from "@styled-icons/fluentui-system-regular/SpeakerMute";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const TopImageGradient = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const CloseWrapper = styled.div`
  width: 100%;
  position: relative;
  top: -21.5vw;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  width: 5%;
  padding: 0.4rem 0.5rem;
  margin-right: 1rem;
  background-color: black;
  color: white;
  border-radius: 90px;

  :hover {
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  position: relative;

  top: -15vw;
`;

const TopTitleWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const TitleImageWrapper = styled.div`
  width: 16%;
`;

const TitleImage = styled.img`
  width: 100%;
`;

const BottomTitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const BottomLeftWrapper = styled.div`
  flex: 1;
`;

const BottomRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const PlayButton = styled.button`
  position: relative;
  width: 40%;
  padding: 0.2rem 0.5rem;
  background-color: white;
  color: black;
  border-radius: 4px;
  margin-right: 0.4rem;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const PlaySpan = styled.span`
  position: relative;
  top: 0.1vw;
`;

const PlayImage = styled(PlayFill)`
  width: 25%;
  margin-right: 0.5rem;
`;

const PlusImage = styled(Plus)`
  width: 6%;
  color: white;
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 45px;
  padding: 0.3rem;
  margin-right: 0.4rem;

  :hover {
    cursor: pointer;
    border-color: white;
  }
`;

const LikeImage = styled(Like)`
  width: 6%;
  color: white;
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 45px;
  padding: 0.3rem;
  margin-right: 0.4rem;

  :hover {
    cursor: pointer;
    border-color: white;
  }
`;

const DislikeImage = styled(Dislike)`
  width: 6%;
  color: white;
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 45px;
  padding: 0.3rem;

  :hover {
    cursor: pointer;
    border-color: white;
  }
`;

const MuteImage = styled(SpeakerMute)`
  width: 6%;
  color: rgba(255, 255, 255, 0.3);
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 45px;
  padding: 0.3rem;

  :hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.isHover) {
      return `
        color: white;
        border-color: rgba(255, 255, 255, 0.7);
        transition: all 0.2s ease-in-out;
      `;
    } else {
      return `
        color: rgba(255, 255, 255, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 0.2s ease-in-out;
      `;
    }
  }}
`;

export default function InformationIntro({ movie, setIsModal = () => {} }) {
  const [isHover, setIsHover] = useState(false);

  const onMuteHover = (e) => {
    e.preventDefault();
    setIsHover(true);
  };

  const onMuteOut = (e) => {
    e.preventDefault();
    setIsHover(false);
  };

  const onClickCloseBtn = (e) => {
    e.preventDefault();
    setIsModal(false);
  };
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={movie.image} />
          <TopImageGradient />
        </ImageWrapper>
        <CloseWrapper>
          <CloseButton onClick={onClickCloseBtn}>X</CloseButton>
        </CloseWrapper>
        <TitleWrapper>
          <TopTitleWrapper>
            <TitleImageWrapper>
              <TitleImage src={movie.titleimage} />
            </TitleImageWrapper>
          </TopTitleWrapper>
          <BottomTitleWrapper>
            <BottomLeftWrapper>
              <PlayButton>
                <PlayImage />
                <PlaySpan>재생</PlaySpan>
              </PlayButton>
              <PlusImage />
              <LikeImage />
              <DislikeImage />
            </BottomLeftWrapper>
            <BottomRightWrapper>
              <MuteImage
                isHover={isHover}
                onMouseOver={onMuteHover}
                onMouseOut={onMuteOut}
              />
            </BottomRightWrapper>
          </BottomTitleWrapper>
        </TitleWrapper>
      </Wrapper>
    </Container>
  );
}