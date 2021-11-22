import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: black;
  margin: 3rem auto;
`;

export default function InformationIntro() {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}
