import styled from "styled-components";

import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { Like } from "@styled-icons/boxicons-regular/Like";
import { Dislike } from "@styled-icons/boxicons-regular/Dislike";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { ArrowDown } from "@styled-icons/evaicons-solid/ArrowDown";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.3rem;
`;

const Image = styled.img`
  width: 16%;
  border-top-right-radius: 4px;

  @media screen and (max-width: 1023px) {
    width: 23%;
  }

  @media screen and (max-width: 767px) {
    width: 28%;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0.3rem;
`;

const IconContent = styled.div`
  width: 100%;
`;

const PlayImage = styled(PlayFill)`
  width: 2%;
  margin-right: 0.4rem;
  background-color: white;
  border-radius: 45px;
  background-color: white;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    width: 3%;
  }

  @media screen and (max-width: 767px) {
    width: 4%;
  }
`;

const PlusImage = styled(Plus)`
  width: 1.2%;
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

  @media screen and (max-width: 1023px) {
    width: 2%;
  }

  @media screen and (max-width: 767px) {
    width: 3%;
  }
`;

const LikeImage = styled(Like)`
  width: 1.2%;
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

  @media screen and (max-width: 1023px) {
    width: 2%;
  }

  @media screen and (max-width: 767px) {
    width: 3%;
  }
`;

const DislikeImage = styled(Dislike)`
  width: 1.2%;
  color: white;
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 45px;
  padding: 0.3rem;
  margin-right: 5rem;

  :hover {
    cursor: pointer;
    border-color: white;
  }

  @media screen and (max-width: 1023px) {
    margin-right: 7rem;
    width: 2%;
  }

  @media screen and (max-width: 767px) {
    width: 3%;
  }
`;

const DownImage = styled(ArrowDown)`
  width: 1.2%;
  color: white;
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 45px;
  padding: 0.3rem;

  :hover {
    cursor: pointer;
    border-color: white;
  }

  @media screen and (max-width: 1023px) {
    width: 2%;
  }

  @media screen and (max-width: 767px) {
    width: 3%;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
`;

const TitleSpanNew = styled.span`
  color: #46d369;
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

const TitleAge = styled.div`
  position: relative;
  top: 0.3vw;
  display: inline-block;
  width: 0.9%;
  border-radius: 3px;
  color: white;
  padding: 0.2rem 0.18rem 0 0.2rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;

  ${(props) => {
    if (props.age === "18") {
      return `
        background-color: rgba(255, 0, 0, 0.7);
      `;
    } else if (props.age === "15") {
      return `
        background-color: #E06F20;
        color: white;
      `;
    } else if (props.age === "12") {
      return `
        background-color: rgba(255, 255, 0, 0.7);
        color: black;
      `;
    } else if (props.age === "19+" || props.age === "15+") {
      return `
        border: 1px solid rgba(255, 255, 255, 0.4);
        color: white;
        font-size: .7rem;
        padding: .1rem .5rem 0 .4rem;
      `;
    } else {
      return `
        background-color: rgba(0, 255, 0, 0.7);
        color: white;
      `;
    }
  }};

  @media screen and (max-width: 1023px) {
    width: 1.5%;
  }

  @media screen and (max-width: 767px) {
    width: 2%;
  }
`;

const TitleTime = styled.span`
  width: 11%;
  color: white;
  width: 100%;
  font-size: 0.65rem;
  margin-right: 0.5rem;
`;

const TitleHD = styled.span`
  font-size: 0.6rem;
  border: 1px solid white;
  border-radius: 2px;
  color: white;
  padding: 0.1rem 0.3rem 0 0.3rem;
`;

const GenreWrapper = styled.div`
  width: 18%;
  margin-top: 0.5rem;

  @media screen and (max-width: 1023px) {
    width: 25%;
  }

  @media screen and (max-width: 767px) {
    width: 31%;
  }
`;

const GenreContent = styled.span`
  width: 11%;
  color: white;
  width: 100%;
  font-size: 0.65rem;
  margin-right: 0.2rem;
  white-space: normal;
`;

export default function HoverImage({
  setCurrIdx,
  imageSrc,
  movie,
  setIsModal,
}) {
  const onClickDown = (e) => {
    e.preventDefault();
    setCurrIdx(movie.id);
    setIsModal(true);
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
      <Wrapper>
        <IconWrapper>
          <IconContent>
            <PlayImage
              onClick={(e) => {
                e.preventDefault();
                window.location.replace(movie.link);
              }}
            />
            <PlusImage />
            <LikeImage />
            <DislikeImage />
            <DownImage onClick={onClickDown} />
          </IconContent>
        </IconWrapper>
        <TitleWrapper>
          <TitleSpanNew>{movie.like}</TitleSpanNew>
          <TitleAge age={movie.age[0]}>{movie.age[0]}</TitleAge>
          {movie.season === null ? (
            <TitleTime>{movie.playtime}</TitleTime>
          ) : (
            <TitleTime>시즌 {movie.season}개</TitleTime>
          )}
          {movie.HD ? <TitleHD>HD</TitleHD> : null}
        </TitleWrapper>
        <GenreWrapper>
          {movie.genre
            ? movie.genre.map((el, idx) => {
                if (idx < movie.genre.length - 1) {
                  return <GenreContent key={idx}>{el}, </GenreContent>;
                } else if (idx === movie.genre.length - 1) {
                  return <GenreContent key={idx}>{el}</GenreContent>;
                }
              })
            : null}
        </GenreWrapper>
      </Wrapper>
    </Container>
  );
}
