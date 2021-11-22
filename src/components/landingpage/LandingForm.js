import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Form = styled.form`
  position: relative;
  width: 78%;
  display: flex;
  margin: auto;
`;

const InputLabelContainer = styled.div`
  position: relative;
  left: -6%;
  flex: 7.5;
  display: flex;
  overflow: hidden;
`;

const InputEmail = styled.input`
  position: relative;
  background-color: white;
  border: 0;
  flex: 8.5;
  padding: 1.5rem 0.9rem 0.5rem;

  ${(props) => {
    if (props.isFocus || props.valueEmail) {
      return `
        border-bottom: 2px solid #e87c03;
      `;
    }
  }}
`;

const InputLabel = styled.label`
  position: relative;
  left: 17%;
  top: 30%;
  color: #8c8c8c;
  font-size: 0.85rem;
  z-index: 1;
  flex: 1.5;

  ${(props) => {
    if (props.isFocus || props.valueEmail) {
      return `
        font-size: 0.5rem;
        top: 15%;
        text-align: left;
        transition: all 0.2s ease-in-out;
      `;
    }
  }}
`;

const StartButton = styled.button`
  position: relative;
  left: -6%;
  flex: 2.5;
  background-color: red;
  color: white;
  font-size: 1.5rem;
  border: 0;
`;

export default function LadingForm() {
  const [isFocus, setIsFocus] = useState(false);
  const [valueEmail, setValueEmail] = useState("");

  const onClick = (e) => {
    e.preventDefault();

    window.location.replace("/main");
  };

  const onFocus = (e) => {
    e.preventDefault();
    setIsFocus(true);
  };

  const onBlur = (e) => {
    e.preventDefault();
    setIsFocus(false);
  };

  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };

  return (
    <Container>
      <Title>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </Title>
      <Form>
        <InputLabelContainer>
          <InputLabel
            htmlFor="inputEmail"
            isFocus={isFocus}
            valueEmail={valueEmail}
          >
            이메일 주소
          </InputLabel>
          <InputEmail
            id="inputEmail"
            value={valueEmail}
            isFocus={isFocus}
            valueEmail={valueEmail}
            onChange={onChangeEmail}
            onFocus={onFocus}
            onBlur={onBlur}
          ></InputEmail>
        </InputLabelContainer>
        <StartButton onClick={onClick}>시작하기</StartButton>
      </Form>
    </Container>
  );
}
