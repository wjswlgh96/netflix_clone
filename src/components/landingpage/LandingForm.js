import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  position: relative;
  width: 78%;
  display: flex;
  margin: auto;
`;

const InputLabelContainer = styled.div`
  position: relative;
  left: -7%;
  flex: 7.5;
  display: flex;
  overflow: hidden;
`;

const InputEmail = styled.input`
  position: relative;
  background-color: white;
  border: 0;
  border-top-left-radius: 0.15rem;
  border-bottom-left-radius: 0.15rem;
  flex: 9;
  padding: 1rem 0.5rem;
  margin: auto;
`;

const InputLabel = styled.label`
  position: relative;
  left: 19%;
  top: 30%;
  color: #8c8c8c;
  font-size: 0.85rem;
  z-index: 1;
  flex: 2;
`;

const StartButton = styled.button`
  position: relative;
  left: -7%;
  flex: 2.5;
  background-color: red;
  color: white;
  font-size: 1.5rem;
  border: 0;
  border-top-right-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;
`;

export default function LadingForm() {
  const onClick = (e) => {
    e.preventDefault();

    window.location.replace("/main");
  };

  return (
    <Container>
      <Title>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </Title>
      <Form>
        <InputLabelContainer>
          <InputLabel htmlFor="inputEmail">이메일 주소</InputLabel>
          <InputEmail id="inputEmail"></InputEmail>
        </InputLabelContainer>
        <StartButton onClick={onClick}>시작하기</StartButton>
      </Form>
    </Container>
  );
}
