import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.form`
  color: white;
`;

const FormContent = styled.h3`
  font-size: 1.2rem;
  font-weight: 350;
  padding: 2.5rem 5rem;
  padding-bottom: 20px;
`;

const InputDiv = styled.div`
  min-height: 60px;
  display: flex;
  padding: 0.3rem 4rem 0.3rem 0;
  justify-content: center;
`;

const InputEmail = styled.input`
  min-width: 440px;
  min-height: 30px;
  padding: 1.5rem 0.7rem 0;
  border: 1px solid #666;
  border-radius: 3px;
  font-size: 1rem;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const InputLabel = styled.label`
  position: relative;
  top: 1.5rem;
  left: 5.5rem;
  font-size: 1rem;
  font-weight: 350;
  color: #8c8c8c;
  transition: top 0.2s, left 0.2s, font-size 0.2s, font-weight 0.2s ease-in-out;

  ${(props) => {
    const { isFocus, inputValue } = props;

    if (isFocus || inputValue.length > 0) {
      return `
            font-size: 0.8rem;
            font-weight: 700;
            top: .7rem;
            left: 4.3rem; 
      `;
    } else {
      return `
            font-size: 1rem;
            font-weight: 350;
            top: 1.5rem;
            left: 5.5rem; 
      `;
    }
  }};
`;

const LinkLogin = styled(Link)`
  text-decoration: none;
`;

const StartButton = styled.button`
  background-color: red;
  font-size: 1.625rem;
  font-weight: 350;
  border: 1px solid red;
  border-radius: 3px;
  color: white;
  min-width: 170px;
  min-height: 66px;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &: hover {
    cursor: pointer;
  }
`;

function LandingForm() {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onFocus = (e) => {
    setIsFocus(true);
  };
  const onBlur = (e) => {
    setIsFocus(false);
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <FormWrapper>
      <FormContent onClick={(e) => e.preventDefault()}>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </FormContent>
      <InputDiv>
        <InputLabel inputValue={inputValue} isFocus={isFocus} htmlFor="email">
          이메일 주소
        </InputLabel>
        <InputEmail
          value={inputValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          id="email"
        ></InputEmail>
        <LinkLogin to="/main">
          <StartButton>시작하기 &gt;</StartButton>
        </LinkLogin>
      </InputDiv>
    </FormWrapper>
  );
}

export default LandingForm;
