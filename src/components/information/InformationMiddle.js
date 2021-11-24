import styled from "styled-components";

const Container = styled.div`
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
    rgba(14, 14, 14, 0) 0%,
    rgba(14, 14, 14, 1) 100%
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
  color: white;
  padding: 0.2rem 0.24rem 0 0.2rem;
  margin-right: 0.5rem;

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
        padding: .1rem .3rem 0 .4rem;
      `;
    } else {
      return `
        background-color: rgba(0, 255, 0, 0.7);
        color: white;
      `;
    }
  }}
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
  padding: 0.1rem 0.2rem 0 0.3rem;
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

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MoreLink = styled.span`
  color: white;
  font-size: 0.62rem;
  font-style: italic;
  margin-left: 0.2rem;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
            <TitleAge age={movie.age[0]}>{movie.age[0]}</TitleAge>
            {movie.season === null ? (
              <TitleSeason>{movie.playtime}</TitleSeason>
            ) : (
              <TitleSeason>시즌 {movie.season} 개</TitleSeason>
            )}

            {movie.HD ? <TitleHD>HD</TitleHD> : null}
          </LeftTitle>
          {movie.ranking <= 10 ? (
            <Title>오늘 대한민국에서 콘텐츠 순위 {movie.ranking}위</Title>
          ) : null}
          <SubTitle>{movie.content}</SubTitle>
        </LeftWrapper>
        <RightWrapper>
          {movie.actor.length > 0 ? (
            <RightTagWrapper>
              <RightTag>출연: </RightTag>
              {movie.actor.map((el, idx) => {
                if (idx <= 2) {
                  return <RightTagContent key={idx}>{el}, </RightTagContent>;
                }
              })}
              <MoreLink>더 보기</MoreLink>
            </RightTagWrapper>
          ) : null}
          {movie.genre.length > 0 ? (
            <RightTagWrapper>
              <RightTag>장르: </RightTag>
              {movie.genre.length < 3
                ? movie.genre.map((el, idx) => {
                    if (idx === movie.genre.length - 1) {
                      return <RightTagContent key={idx}>{el}</RightTagContent>;
                    } else {
                      return (
                        <RightTagContent key={idx}>{el}, </RightTagContent>
                      );
                    }
                  })
                : movie.genre.map((el, idx) => {
                    if (idx <= 1) {
                      return (
                        <RightTagContent key={idx}>{el}, </RightTagContent>
                      );
                    } else if (idx === 2) {
                      return <RightTagContent key={idx}>{el}</RightTagContent>;
                    }
                  })}{" "}
            </RightTagWrapper>
          ) : null}
          {movie.character.length > 0 ? (
            <RightTagWrapper>
              <RightTag>프로그램 특징: </RightTag>
              {movie.character.map((el, idx) => {
                if (idx === movie.character.length - 1) {
                  return <RightTagContent>{el}</RightTagContent>;
                } else {
                  return <RightTagContent>{el}, </RightTagContent>;
                }
              })}
            </RightTagWrapper>
          ) : null}
        </RightWrapper>
      </Wrapper>
    </Container>
  );
}
