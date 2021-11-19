import styled from "styled-components";

import { Close } from "@styled-icons/evaicons-solid/Close";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { Plus } from "@styled-icons/bootstrap/Plus";
import { Like } from "@styled-icons/foundation/Like";
import { Dislike } from "@styled-icons/foundation/Dislike";
import { VolumeMute } from "@styled-icons/bootstrap/VolumeMute";

const InforTitleImageWrapper = styled.div`
  width: 100%;
`;

const InforTitleImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const InformationCloseWrapper = styled.div`
  width: 10%;
  position: absolute;
  top: 8%;
  left: 77%;
`;

const InformationCloseButton = styled(Close)`
  width: 25%;
  background-color: black;
  border-radius: 90em;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const InformationUserClickWrapper = styled.div`
  position: relative;
  top: -12%;
  width: 100%;
  display: flex;
  margin: 2em;
  margin-bottom: 0;
`;

const InformationUserLeftWrapper = styled.div`
  flex: 8.5;
`;

const InformationUserRightWrapper = styled.div`
  flex: 1.5;
`;

const InformationPlayButton = styled.button`
  width: 12%;
  font-size: 1.1em;
  border: 0;
  border-radius: 3px;
  padding: 0.3em 0.2em;
  margin-right: 0.5em;

  &: hover {
    background-color: #e6e6e6;
  }
`;

const PlayImg = styled(PlayFill)`
  width: 30%;
  margin-right: 0.3em;
`;

const PlusImg = styled(Plus)`
  width: 4%;
  border: 2px solid #a6a6a6;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5em;
  margin-right: 0.3em;

  &: hover {
    border: 2px solid #ffffff;
  }
`;

const LikeImg = styled(Like)`
  width: 4%;
  border: 2px solid #a6a6a6;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5em;
  margin-right: 0.3em;

  &: hover {
    border: 2px solid #ffffff;
  }
`;

const DisLikeImg = styled(Dislike)`
  width: 4%;
  border: 2px solid #a6a6a6;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5em;
`;

const VolumeMuteImg = styled(VolumeMute)`
  width: 24%;
  border: 2px solid #a6a6a6;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5em;

  &: hover {
    border: 2px solid #ffffff;
  }
`;

const InformationMiddleContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const InformationContentLeftWrapper = styled.div`
  flex: 6;
  margin: 0 2em 2em 2em;
`;

const InformationContentRightWrapper = styled.div`
  flex: 4;
  margin: 0 2em 2em 2em;
`;

const InformationContentLeftTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const InformationContentLeftLike = styled.div`
  color: #46d369;
  margin-right: 0.5em;
`;

const InformationContentLeftYear = styled.div`
  margin-right: 0.5em;
`;

const InformationContentLeftDesc = styled.div`
  font-size: 1.3em;
  line-height: 1.5em;
`;

const InformationContentRightActorDiv = styled.div`
  display: flex;
  font-size: 1.1em;
  margin-bottom: 2em;
`;
const InformationContentRightActorTab = styled.span`
  color: #777777;
  white-space: nowrap;
  margin-right: 0.5em;
  line-height: 1.5em;
`;
const InformationContentRightActorDesc = styled.div`
  color: white;
  line-height: 1.5em;
`;

function InformationIntro({ movieList, setIsModal }) {
  const onClickSetIsModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <InforTitleImageWrapper>
        <InforTitleImage src={movieList[0].image}></InforTitleImage>
        <InformationCloseWrapper>
          <InformationCloseButton onClick={onClickSetIsModal} />
        </InformationCloseWrapper>
      </InforTitleImageWrapper>
      <InformationUserClickWrapper>
        <InformationUserLeftWrapper>
          <InformationPlayButton>
            <PlayImg /> 재생
          </InformationPlayButton>
          <PlusImg aria-label="내가 찜한 콘텐츠에 추가" />
          <LikeImg />
          <DisLikeImg />
        </InformationUserLeftWrapper>
        <InformationUserRightWrapper>
          <VolumeMuteImg />
        </InformationUserRightWrapper>
      </InformationUserClickWrapper>
      <InformationMiddleContentWrapper>
        <InformationContentLeftWrapper>
          <InformationContentLeftTitleWrapper>
            <InformationContentLeftLike>
              {movieList[0].like} 일치
            </InformationContentLeftLike>
            <InformationContentLeftYear>
              {movieList[0].year}
            </InformationContentLeftYear>
          </InformationContentLeftTitleWrapper>
          <InformationContentLeftDesc>
            {movieList[0].content}
          </InformationContentLeftDesc>
        </InformationContentLeftWrapper>
        <InformationContentRightWrapper>
          <InformationContentRightActorDiv>
            <InformationContentRightActorTab>
              출연:
            </InformationContentRightActorTab>
            <InformationContentRightActorDesc>
              {movieList[0].actor.map((el, idx) => {
                return el + ", ";
              })}
            </InformationContentRightActorDesc>
          </InformationContentRightActorDiv>
          <InformationContentRightActorDiv>
            <InformationContentRightActorTab>
              장르:
            </InformationContentRightActorTab>
            <InformationContentRightActorDesc>
              {movieList[0].genre.map((el, idx) => {
                return el + ", ";
              })}
            </InformationContentRightActorDesc>
          </InformationContentRightActorDiv>
        </InformationContentRightWrapper>
      </InformationMiddleContentWrapper>
    </>
  );
}

export default InformationIntro;
