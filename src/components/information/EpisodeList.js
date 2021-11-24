import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  z-index: -1;
  margin: auto;
  border-radius: 4px;
  border-bottom: 1px solid rgb(64, 64, 64);
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 1.5rem auto;
`;

const LeftWrapper = styled.div`
  width: 100%;
  flex: 3;
  display: flex;
`;

const LeftNumber = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  line-height: 3.9rem;
  font-size: 1.2rem;
`;

const LeftImageWrapper = styled.div`
  flex: 7;
  display: flex;
`;

const LeftImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const RightWrapper = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
`;

const RightTitleWrapper = styled.div`
  width: 97%;
  margin-top: 0.3rem;
  margin-left: 0.7rem;
  display: flex;
`;

const RightTitle = styled.div`
  flex: 8;
  color: white;
  font-size: 0.8rem;
`;

const RightSubTitle = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 0.8rem;
`;

const RightBottomWrapper = styled.div`
  width: 95%;
  margin: auto;
`;

const RightBottomContent = styled.div`
  width: 95%;
  color: #d2d2d2;
  font-size: 0.6rem;
  white-space: normal;
`;

export default function EpisodeList({ count, movie }) {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <LeftNumber>{count}</LeftNumber>
          <LeftImageWrapper>
            <LeftImage src={movie.image} />
          </LeftImageWrapper>
        </LeftWrapper>
        <RightWrapper>
          <RightTitleWrapper>
            <RightTitle>{movie.title}</RightTitle>
            <RightSubTitle>{movie.playtime}</RightSubTitle>
          </RightTitleWrapper>
          <RightBottomWrapper>
            <RightBottomContent>{movie.content}</RightBottomContent>
          </RightBottomWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
}
