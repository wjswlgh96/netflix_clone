import styled from "styled-components";

import EpisodeList from "./EpisodeList";

const Container = styled.div`
  width: 100%;
  position: relative;
  top: -12vw;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.7rem;
`;

const TitleLeft = styled.div`
  flex: 5;
  color: white;
  font-size: 1.1rem;
`;

const TitleRight = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 0.85rem;
`;

export default function InformationEpisode({ movie }) {
  return (
    <>
      {movie.episode ? (
        <Container>
          <Wrapper>
            <TitleWrapper>
              <TitleLeft>회차</TitleLeft>
              <TitleRight>시즌 1</TitleRight>
            </TitleWrapper>
            {movie.episode.map((el, idx) => {
              return <EpisodeList key={idx} count={idx + 1} movie={el} />;
            })}
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
}
