import { useState, useEffect } from "react";
import styled from "styled-components";

import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { Like } from "@styled-icons/boxicons-regular/Like";
import { Dislike } from "@styled-icons/boxicons-regular/Dislike";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { ArrowDown } from "@styled-icons/evaicons-solid/ArrowDown";
import { Check2 } from "@styled-icons/bootstrap/Check2";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  animation: SizeUp 0.2s linear;
  animation-fill-mode: forwards;

  @keyframes SizeUp {
    0% {
      transform: scale(1);
      padding: 0;
    }

    100% {
      transform: scale(1.1);
      padding: 0 3rem 2rem 0.9rem;
    }
  }

  @keyframes SizeUpTablet {
    0% {
      transform: scale(1);
      padding: 0;
    }

    100% {
      transform: scale(1.1);
      padding: 0 1rem 2rem 1rem;
    }
  }

  @keyframes SizeUpMobile {
    0% {
      transform: scale(1);
      padding: 0;
    }

    100% {
      transform: scale(1.1);
      padding: 0 4rem 2rem 2rem;
    }
  }

  @media screen and (max-width: 1023px) {
    animation: SizeUpTablet 0.2s linear;
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 767px) {
    animation: SizeUpMobile 0.2s linear;
    animation-fill-mode: forwards;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  border-top-right-radius: 4px;
  border-radius: 4px;
  border-bottom: 2px solid white;
`;

const Wrapper = styled.div`
  width: 99%;
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
  width: 10%;
  margin-right: 0.4rem;
  background-color: white;
  border-radius: 45px;
  background-color: white;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    width: 12%;
  }

  @media screen and (max-width: 767px) {
    width: 11.5%;
  }
`;

const CheckImage = styled(Check2)`
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

  @media screen and (max-width: 1023px) {
    width: 7.5%;
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

  @media screen and (max-width: 1023px) {
    width: 7.5%;
  }
`;

const DislikeImage = styled(Dislike)`
  width: 6%;
  color: white;
  background-color: #2a2a2a;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 45px;
  padding: 0.3rem;
  margin-right: 6rem;

  :hover {
    cursor: pointer;
    border-color: white;
  }

  @media screen and (max-width: 1023px) {
    width: 7.5%;
    margin-right: 6.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-right: 10rem;
  }
`;

const DownImage = styled(ArrowDown)`
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

  @media screen and (max-width: 1023px) {
    width: 7.5%;
  }

  @media screen and (max-width: 767px) {
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
  width: 5%;
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
    width: 6.5%;
  }

  @media screen and (max-width: 767px) {
  }
`;

const TitleTime = styled.span`
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
  width: 100%;
  margin-top: 0.5rem;
`;

const GenreContent = styled.span`
  color: white;
  font-size: 0.65rem;
  margin-right: 0.2rem;
  white-space: normal;
`;

export default function ListHoverImage({
  setCurrIdx,
  imageSrc,
  movie,
  myList,
  setMyList,
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
        <Image onClick={onClickDown} src={imageSrc} />
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
            <CheckImage
              onClick={(e) => {
                e.preventDefault();
                const arr = myList.filter((el) => {
                  return el !== movie.id;
                });

                setMyList(arr);
              }}
            />
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
