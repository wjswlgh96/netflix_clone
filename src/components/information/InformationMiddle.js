import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: -12.1vw;
  width: 100%;
  background-color: #141414;
`;

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  display: flex;
  margin-bottom: 2rem;
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const LeftWrapper = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  color: white;
`;

const LeftTitle = styled.div`
  position: relative;
  width: 60%;
  overflow-y: hidden;
  margin-bottom: 0.7rem;
`;

const TitleSpanNew = styled.span`
  color: #46d369;
  font-size: 0.85rem;
  margin-right: 0.5rem;
`;

const TitleYear = styled.span`
  width: 11%;
  color: white;
  width: 100%;
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

const TitleAge = styled.div`
  position: relative;
  top: 12%;
  display: inline-block;
  width: 6%;
  border-radius: 3px;
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
  padding: 0.2rem 0.24rem 0 0.2rem;
  margin-right: 0.5rem;
`;

const TitleSeason = styled.span`
  color: white;
  font-weight: 300;
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

const TitleHD = styled.span`
  font-size: 0.6rem;
  border: 1px solid white;
  border-radius: 2px;
  color: white;
  padding: 0.1rem 0.2rem 0;
`;

const Title = styled.div`
  width: 100%;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
`;

const SubTitle = styled.div`
  width: 95%;
  font-weight: 300;
  font-size: 0.85rem;
  line-height: 1.2rem;
  white-space: normal;
`;

const RightWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  color: white;
`;

const RightTagWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const RightTag = styled.span`
  color: #777777;
  font-size: 0.6rem;
`;

const RightTagContent = styled.span`
  color: white;
  font-size: 0.59rem;
`;

export default function InformationMiddle({ movie }) {
  return (
    <Container>
      <Gradient></Gradient>
      <Wrapper>
        <LeftWrapper>
          <LeftTitle>
            <TitleSpanNew>{movie.like}</TitleSpanNew>
            <TitleYear>{movie.year}</TitleYear>
            <TitleAge>18</TitleAge>
            <TitleSeason>{movie.season}</TitleSeason>
            {movie.HD ? <TitleHD>HD</TitleHD> : null}
          </LeftTitle>
          <Title>오늘 대한민국에서 콘텐츠 순위 {movie.ranking}위</Title>
          <SubTitle>{movie.content}</SubTitle>
        </LeftWrapper>
        <RightWrapper>
          <RightTagWrapper>
            <RightTag>출연: </RightTag>
            {movie.actor.map((el, idx) => {
              if (idx <= 1) {
                return <RightTagContent key={idx}>{el}, </RightTagContent>;
              } else if (idx === 2) {
                return <RightTagContent key={idx}>{el}</RightTagContent>;
              }
            })}
          </RightTagWrapper>
          <RightTagWrapper>
            <RightTag>장르: </RightTag>
            {movie.genre.map((el, idx) => {
              if (idx === movie.genre.length - 1) {
                return <RightTagContent key={idx}>{el}</RightTagContent>;
              } else {
                return <RightTagContent key={idx}>{el}, </RightTagContent>;
              }
            })}
          </RightTagWrapper>
          <RightTagWrapper>
            {movie.character.length > 0 ? (
              <>
                <RightTag>프로그램 특징: </RightTag>
                {movie.character.map((el, idx) => {
                  if (idx === movie.character.length - 1) {
                    return <RightTagContent>{el}</RightTagContent>;
                  } else {
                    return <RightTagContent>{el}, </RightTagContent>;
                  }
                })}
              </>
            ) : null}
          </RightTagWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
}
