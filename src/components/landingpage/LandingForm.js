import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Title = styled.div`
  width: 100%;
  color: white;
  font-size: 0.9rem;

  @media screen and (max-width: 1023px) {
    font-size: 1.85rem;
    font-weight: 300;
  }

  @media screen and (max-width: 767px) {
    margin: auto;
    width: 56%;
    font-size: 2.9rem;
  }
`;

const FormWrapper = styled.div`
  width: 30vw;
  margin: auto;

  @media screen and (max-width: 1023px) {
    width: 58vw;
  }

  @media screen and (max-width: 767px) {
    width: 65vw;
    margin: auto;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1023px) {
    width: 100%;
    display: flex;
  }

  @media screen and (max-width: 767px) {
    display: inline-block;
  }
`;

const EmailWrapper = styled.div`
  position: relative;
  flex: 7;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  width: 100%;
  left: 4.8%;
  top: 35%;
  color: #8c8c8c;
  font-size: 0.7rem;
  font-weight: 400;

  ${(props) => {
    if (props.isLabelTop) {
      return `
        left: -37.5%;

        @media screen and (max-width: 1023px) {
          width: 20%;
          top: 33%;
          font-size: 1.6rem;
        }

        @media screen and (max-width: 767px) {
          width: 15%;
        }
      `;
    }
  }}

  @media screen and (max-width: 1023px) {
    left: 2%;
    top: 33%;
    font-size: 1.6rem;
  }

  ${(props) => {
    if ((props.isEmailFocus && props.isLabelTop) || props.inputEmails) {
      return `
        font-size: 0.6rem;
        left: -38.7%;
        top: 15%;
        transition: all 0.2s ease-in-out;
        

        @media screen and (max-width: 1023px) {
          left: -1%;
          top: 15%;
          font-size: 1.2rem;
          transition: all 0.2s ease-in-out;
        }

        @media screen and (max-width: 767px) {
          left: 1%;
        }
      `;
    } else if (props.isEmailFocus || props.inputEmails) {
      return `
        font-size: 0.6rem;
        top: 15%;
        transition: all 0.2s ease-in-out;

        @media screen and (max-width: 1023px) {
          font-size: 1.3rem;
          top: 15%;
          transition: all 0.2s ease-in-out;
        }
      `;
    }
  }}
`;

const InputEmail = styled.input`
  width: 100%;
  background-color: white;
  border: 0;
  padding: 1rem 1rem 0.5rem;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  ${(props) => {
    if (props.isEmailFocus || props.inputEmails) {
      return `
        border-bottom: 2px solid #E87C03;
      `;
    }
  }}

  @media screen and (max-width: 1023px) {
    padding: 2.5rem 1rem 1rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 767px) {
    width: 95%;
    padding: 2.5rem 0 1rem 1.4rem;
    border-radius: 2px;
  }
`;

const ButtonWrapper = styled.div`
  flex: 3;

  @media screen and (max-width: 767px) {
    margin: auto;
    width: 25%;
  }
`;

const StartButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: red;
  color: white;
  font-size: 1.2rem;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  @media screen and (max-width: 1023px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-top: 3rem;
    padding: 1rem 0;
    border-radius: 2px;
  }
`;

const StartLink = styled(Link)``;

export default function LandingForm({ isLabelTop }) {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [inputEmails, setInputEmail] = useState("");

  const onFocusEmail = (e) => {
    e.preventDefault();
    setIsEmailFocus(true);
  };

  const onBlurEmail = (e) => {
    e.preventDefault();
    setIsEmailFocus(false);
  };

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </Title>
        </TitleWrapper>
        <FormWrapper>
          <Form>
            <EmailWrapper>
              {isLabelTop ? (
                <>
                  <InputLabel
                    htmlFor="isTop"
                    inputEmails={inputEmails}
                    isLabelTop={isLabelTop}
                    isEmailFocus={isEmailFocus}
                  >
                    이메일 주소
                  </InputLabel>
                  <InputEmail
                    id="isTop"
                    value={inputEmails}
                    inputEmails={inputEmails}
                    isEmailFocus={isEmailFocus}
                    onFocus={onFocusEmail}
                    onBlur={onBlurEmail}
                    onChange={onChangeEmail}
                  ></InputEmail>
                </>
              ) : (
                <>
                  <InputLabel
                    htmlFor="email"
                    inputEmails={inputEmails}
                    isLabelTop={isLabelTop}
                    isEmailFocus={isEmailFocus}
                  >
                    이메일 주소
                  </InputLabel>
                  <InputEmail
                    id="email"
                    value={inputEmails}
                    inputEmails={inputEmails}
                    isEmailFocus={isEmailFocus}
                    onFocus={onFocusEmail}
                    onBlur={onBlurEmail}
                    onChange={onChangeEmail}
                  ></InputEmail>
                </>
              )}
            </EmailWrapper>
            <ButtonWrapper>
              <StartLink to="/main">
                <StartButton>시작하기</StartButton>
              </StartLink>
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}
