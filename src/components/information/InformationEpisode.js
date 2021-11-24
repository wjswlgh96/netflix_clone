import { useState } from "react";
import styled from "styled-components";

import EpisodeList from "./EpisodeList";

import { ArrowDown } from "@styled-icons/evaicons-solid/ArrowDown";

const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const SeasonAllWrapper = styled.div`
  z-index: -1;
  width: 100%;
  color: white;
  margin-top: 1rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.7rem;
`;

const TitleLeft = styled.div`
  flex: 3;
  color: white;
  font-size: 1.1rem;
`;

const TitleRight = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 0.85rem;
`;

const RightSeasonButton = styled.button`
  width: 12%;
  display: flex;
  justify-content: flex-end;
  color: white;
  background-color: #242424;
  border: 1px solid rgb(77, 77, 77);
  padding: 0.5rem 0.5rem;
  text-align: left;
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.isAll) {
      return `
        width: 23%;
      `;
    }
  }}
`;

const RightContent = styled.span`
  font-size: 0.85rem;
  width: 100%;
`;

const ArrowImage = styled(ArrowDown)`
  color: white;
  width: 1vw;
  margin-left: 0.5rem;
`;

const SeasonBox = styled.div`
  position: absolute;
  max-width: 20%;
  max-height: 20%;
  left: 74.8%;
  top: 51%;
  background-color: rgba(24, 24, 24, 1);
  border: 1px solid rgb(77, 77, 77);
  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.isAll) {
      return `
        top: 37%;
      `;
    }
  }}
`;

const SeasonWrapper = styled.button`
  width: 90%;
  background-color: rgba(24, 24, 24, 1);
  border-bottom: 2px solid rgb(77, 77, 77);
  margin: 1rem auto;
`;

const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;
  display: flex;

  :hover {
    background-color: rgba(70, 70, 70, 1);
  }
`;

const TitleContent = styled.span`
  flex: 4;
  color: white;
  font-size: 0.95rem;
`;

const EpContent = styled.span`
  flex: 6;
  color: white;
  font-size: 0.7rem;
  line-height: 1.1rem;
  display: flex;
  justify-content: flex-end;
`;

const AllContent = styled.div`
  width: 90%;
  color: white;
  margin: 0 auto 1rem;
  font-size: 0.95rem;

  :hover {
    background-color: rgba(70, 70, 70, 1);
  }
`;

export default function InformationEpisode({ movie }) {
  const [currIdx, setCurrIdx] = useState(-1);
  const [isClick, setIsClick] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const onClickSeason = (e) => {
    e.preventDefault();
    setIsClick((curr) => !curr);
  };

  const onClickSelect = (e, idx) => {
    e.preventDefault();
    setCurrIdx(idx);
    setIsClick(false);
    setIsAll(false);
  };

  const onClickAll = (e) => {
    e.preventDefault();
    setIsAll(true);
    setIsClick(false);
  };

  return (
    <>
      {movie.episode.length > 0 ? (
        <Container>
          <Wrapper>
            <TitleWrapper>
              <TitleLeft>회차</TitleLeft>
              {movie.episode.length > 1 ? (
                <>
                  <RightSeasonButton isAll={isAll} onClick={onClickSeason}>
                    {currIdx > -1 ? (
                      isAll ? (
                        <>
                          <RightContent>전체 회차 표시</RightContent>
                          <ArrowImage />
                        </>
                      ) : (
                        <>
                          <RightContent>
                            {movie.episode[currIdx].title}
                          </RightContent>
                          <ArrowImage />
                        </>
                      )
                    ) : isAll ? (
                      <>
                        <RightContent>전체 회차 표시</RightContent>
                        <ArrowImage />
                      </>
                    ) : (
                      <>
                        <RightContent>
                          {movie.episode[movie.episode.length - 1].title}
                        </RightContent>
                        <ArrowImage />
                      </>
                    )}
                  </RightSeasonButton>
                  {isClick ? (
                    <SeasonBox isAll={isAll}>
                      <SeasonWrapper>
                        {movie.episode.map((el, idx) => {
                          return (
                            <SelectWrapper
                              key={idx}
                              onClick={(e) => onClickSelect(e, idx)}
                            >
                              <TitleContent>{el.title}</TitleContent>
                              <EpContent>
                                ({el.data.length}개 에피소드)
                              </EpContent>
                            </SelectWrapper>
                          );
                        })}
                      </SeasonWrapper>
                      <AllContent onClick={onClickAll}>
                        전체 회차 표시
                      </AllContent>
                    </SeasonBox>
                  ) : null}
                </>
              ) : (
                <TitleRight>시즌1</TitleRight>
              )}
            </TitleWrapper>
            {movie.episode.length > 1
              ? currIdx > -1
                ? isAll
                  ? movie.episode.map((el, idx) => {
                      return (
                        <SeasonAllWrapper key={idx}>
                          {el.title}
                          {el.data.map((el2, idx2) => {
                            return (
                              <EpisodeList
                                key={idx2}
                                count={idx2 + 1}
                                movie={el2}
                              />
                            );
                          })}
                        </SeasonAllWrapper>
                      );
                    })
                  : movie.episode[currIdx].data.map((el, idx) => {
                      return (
                        <EpisodeList key={idx} count={idx + 1} movie={el} />
                      );
                    })
                : isAll
                ? movie.episode.map((el, idx) => {
                    return (
                      <SeasonAllWrapper key={idx}>
                        {el.title}
                        {el.data.map((el2, idx2) => {
                          return (
                            <EpisodeList
                              key={idx2}
                              count={idx2 + 1}
                              movie={el2}
                            />
                          );
                        })}
                      </SeasonAllWrapper>
                    );
                  })
                : movie.episode[movie.episode.length - 1].data.map(
                    (el, idx) => {
                      return (
                        <EpisodeList key={idx} count={idx + 1} movie={el} />
                      );
                    }
                  )
              : movie.episode[0].data.map((el, idx) => {
                  return <EpisodeList key={idx} count={idx + 1} movie={el} />;
                })}
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
}
