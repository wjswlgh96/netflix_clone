import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: gray;
  overflow-y: auto;
`;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export default function Play() {
  const onClick = (e) => {
    window.location.replace("/main");
  };

  return (
    <Container>
      <Div onClick={onClick}>아무것도 없지롱~</Div>
    </Container>
  );
}
