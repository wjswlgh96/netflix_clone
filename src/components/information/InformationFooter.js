import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: white;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const TitleLeft = styled.span`
  font-size: 1.1rem;
`;

const TitleRight = styled.span`
  font-size: 1.1rem;
  font-weight: 300;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ExplanationWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  position: relative;
`;

const Key = styled.span`
  color: #777777;
  font-size: 0.7rem;
`;

const Value = styled.span`
  color: white;
  font-size: 0.7rem;
`;

const TitleAge = styled.span`
  position: relative;
  width: 16%;
  left: -39%;
  border-radius: 3px;
  color: white;
  padding: 0.2rem 0.24rem 0 0.2rem;

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

const AgeValue = styled.span`
  position: relative;
  left: -37%;
  color: white;
  font-size: 0.7rem;
`;

export default function InformationFooter({ movie }) {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <TitleLeft>{movie.title}</TitleLeft>
          <TitleRight> 상세 정보</TitleRight>
        </TitleWrapper>
        <ContentWrapper>
          {movie.creator.length > 0 ? (
            <ExplanationWrapper>
              <Key>
                크리에이터:
                {movie.creator.map((el, idx) => {
                  if (idx === movie.creator.length - 1) {
                    return <Value key={idx}> {el}</Value>;
                  } else {
                    return <Value key={idx}> {el},</Value>;
                  }
                })}
              </Key>
            </ExplanationWrapper>
          ) : null}
          {movie.actor.length > 0 ? (
            <ExplanationWrapper>
              <Key>
                출연:
                {movie.actor.map((el, idx) => {
                  if (idx === movie.actor.length - 1) {
                    return <Value key={idx}> {el}</Value>;
                  } else {
                    return <Value key={idx}> {el},</Value>;
                  }
                })}
              </Key>
            </ExplanationWrapper>
          ) : null}
          {movie.genre.length > 0 ? (
            <ExplanationWrapper>
              <Key>
                장르:
                {movie.genre.map((el, idx) => {
                  if (idx === movie.genre.length - 1) {
                    return <Value key={idx}> {el}</Value>;
                  } else {
                    return <Value key={idx}> {el},</Value>;
                  }
                })}
              </Key>
            </ExplanationWrapper>
          ) : null}
          {movie.character.length > 0 ? (
            <ExplanationWrapper>
              <Key>
                프로그램 특징:
                {movie.character.map((el, idx) => {
                  if (idx === movie.character.length - 1) {
                    return <Value key={idx}> {el}</Value>;
                  } else {
                    return <Value key={idx}> {el},</Value>;
                  }
                })}
              </Key>
            </ExplanationWrapper>
          ) : null}
          <ExplanationWrapper>
            <Key>관람등급:</Key>
            <TitleAge age={movie.age[0]}>{movie.age[0]}</TitleAge>
            <AgeValue>{movie.age[1]}</AgeValue>
          </ExplanationWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
}
