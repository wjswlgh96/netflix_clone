import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { users } from "../../dummydata/dummyDatas.js";

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    background-color: black;
    border-bottom: 1px solid white;
  }
`;

const Wrapper = styled.div`
  width: 23%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  margin: 1rem auto 10rem;
  flex-direction: column;
  padding: 4rem;

  @media screen and (max-width: 1023px) {
    width: 30%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: auto;
  }
`;

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;

  @media screen and (max-width: 1023px) {
    font-size: 3.3rem;
    font-weight: 400;
  }

  @media screen and (max-width: 767px) {
    font-size: 4rem;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: 2rem;
`;

const Form = styled.form`
  position: relatvie;
  width: 100%;
`;

const InputID = styled.input`
  width: 96%;
  background-color: #333333;
  color: white;
  padding: 1.8rem 0 0.6rem 1.2rem;
  border-radius: 4px;

  ${(props) => {
    if (props.isFocusID || props.valueID) {
      return `
        border-bottom: 2px solid #E87C03;
      `;
    }
  }}

  @media screen and (max-width: 1023px) {
    width: 90%;
    padding: 2rem 1.5rem 1rem 1.5rem;
    font-size: 1.75rem;
  }

  @media screen and (max-width: 767px) {
    width: 96.5%;
    padding: 3.5rem 0 1rem 3rem;
  }
`;

const InputPW = styled.input`
  width: 96%;
  background-color: #333333;
  color: white;
  padding: 1.8rem 0 0.6rem 1.2rem;
  border-radius: 4px;
  margin-bottom: 3rem;

  ${(props) => {
    if (props.isFocusPW || props.valuePW) {
      return `
            border-bottom: 2px solid #E87C03;
      `;
    }
  }}

  @media screen and (max-width: 1023px) {
    width: 90%;
    padding: 2rem 1.5rem 1rem 1.5rem;
    font-size: 1.75rem;
  }

  @media screen and (max-width: 767px) {
    width: 96.5%;
    padding: 3.5rem 0 1rem 3rem;
  }
`;

const IDLabel = styled.label`
  position: relative;
  width: 50%;
  top: 2.4vw;
  left: 5%;
  color: #8c8c8c;

  @media screen and (max-width: 1023px) {
    font-size: 1.75rem;
    top: 3.7vw;
  }

  ${(props) => {
    if (props.isFocusID || props.valueID) {
      return `
            top: 1.5vw;
            font-size: .8rem;
            transition: all 0.2s ease-in-out;

            @media screen and (max-width: 1023px) {
              font-size: 1.1rem;
              top: 2vw;
            }

            @media screen and (max-width: 767px) {
              left: 3.4%;
              top: 2.5vw;
            }
          `;
    } else {
      return `
            top: 2.4vw;
            font-size: 1rem;
            transition: all 0.2s ease-in-out;

            @media screen and (max-width: 1023px) {
              font-size: 1.75rem;
              top: 3.7vw;
            }

            @media screen and (max-width: 767px) {
              top: 4.5vw;
              left: 3.4%;
            }
        `;
    }
  }}
`;

const PWLabel = styled.label`
  width: 50%;
  position: relative;
  top: 2.4vw;
  left: 5%;
  color: #8c8c8c;

  @media screen and (max-width: 1023px) {
    font-size: 1.75rem;
    top: 3.7vw;
  }

  ${(props) => {
    if (props.isFocusPW || props.valuePW) {
      return `
            top: 1.5vw;
            font-size: .8rem;
            transition: all 0.2s ease-in-out;

            @media screen and (max-width: 1023px) {
              font-size: 1.1rem;
              top: 2vw;
            }

            @media screen and (max-width: 767px) {
              left: 3.4%;
              top: 2.5vw;
            }
          `;
    } else {
      return `
            top: 2.4vw;
            font-size: 1rem;
            transition: all 0.2s ease-in-out;

            @media screen and (max-width: 1023px) {
              font-size: 1.75rem;
              top: 3.7vw;
            }

            @media screen and (max-width: 767px) {
              top: 4.5vw;
              left: 3.4%;
            }
        `;
    }
  }}
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: red;
  color: white;
  padding: 1.1rem 1rem;
  border-radius: 4px;
  font-size: 1.18rem;

  @media screen and (max-width: 1023px) {
    font-size: 1.6rem;
    padding: 1.5rem 1rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

const FormBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem auto;
`;

const FormCheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const FormCheckbox = styled.input`
  width: 100%;

  @media screen and (max-width: 767px) {
    width: 15%;
    margin-right: 1rem;
  }
`;

const FormCheckboxLabel = styled.label`
  color: #b3b3b3;

  @media screen and (max-width: 1023px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const FormLinkWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

const FormLink = styled(Link)`
  color: #b3b3b3;

  @media screen and (max-width: 1023px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const HomeLinkWrapper = styled.div`
  width: 100%;
  margin: 4rem auto 1rem;
`;

const HomeLinkContent = styled.span`
  color: #b3b3b3;
  font-size: 1.15rem;
  margin-right: 0.5rem;

  @media screen and (max-width: 1023px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

const HomeLink = styled(Link)`
  color: white;
  font-size: 1.15rem;

  @media screen and (max-width: 1023px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

export default function LoginBox() {
  const [user, setUser] = useState(users);
  const [userCheck, setUserCheck] = useState(false);
  const [isFocusID, setIsFocusID] = useState(false);
  const [isFocusPW, setIsFocusPW] = useState(false);
  const [valueID, setValueID] = useState("");
  const [valuePW, setValuePW] = useState("");

  useEffect(() => {
    if (user[0].id === valueID && user[0].password === valuePW) {
      setUserCheck(true);
    }
  }, [valueID, valuePW]);

  const onFocusID = (e) => {
    e.preventDefault();
    setIsFocusID(true);
  };

  const onBlurID = (e) => {
    e.preventDefault();
    setIsFocusID(false);
  };

  const onChangeID = (e) => {
    setValueID(e.target.value);
  };

  const onFocusPW = (e) => {
    e.preventDefault();
    setIsFocusPW(true);
  };

  const onBlurPW = (e) => {
    e.preventDefault();
    setIsFocusPW(false);
  };

  const onChangePW = (e) => {
    setValuePW(e.target.value);
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    window.location.replace("/main");
  };

  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <FormWrapper>
          <Form>
            <IDLabel htmlFor="inputID" isFocusID={isFocusID} valueID={valueID}>
              이메일 주소 또는 전화번호
            </IDLabel>
            <InputID
              id="inputID"
              type="text"
              value={valueID}
              onFocus={onFocusID}
              onBlur={onBlurID}
              onChange={onChangeID}
              isFocusID={isFocusID}
              valueID={valueID}
            ></InputID>
            <PWLabel htmlFor="inputPW" isFocusPW={isFocusPW} valuePW={valuePW}>
              비밀번호
            </PWLabel>
            <InputPW
              id="inputPW"
              type="password"
              value={valuePW}
              onFocus={onFocusPW}
              onBlur={onBlurPW}
              onChange={onChangePW}
              isFocusPW={isFocusPW}
              valuePW={valuePW}
            ></InputPW>
            {userCheck ? (
              <LoginButton onClick={onClickLogin}>로그인</LoginButton>
            ) : (
              <LoginButton
                style={{ opacity: "0.5" }}
                onClick={onClickLogin}
                disabled
              >
                로그인
              </LoginButton>
            )}
            <FormBottomWrapper>
              <FormCheckboxWrapper>
                <FormCheckbox type="checkbox"></FormCheckbox>
                <FormCheckboxLabel>로그인 정보 저장</FormCheckboxLabel>
              </FormCheckboxWrapper>
              <FormLinkWrapper>
                <FormLink to="/">메인으로 돌아가기</FormLink>
              </FormLinkWrapper>
            </FormBottomWrapper>
          </Form>
        </FormWrapper>
        <HomeLinkWrapper>
          <HomeLinkContent>Netflix 회원이 아닌가요?</HomeLinkContent>
          <HomeLink to="/">지금 가입하세요.</HomeLink>
        </HomeLinkWrapper>
      </Wrapper>
    </Container>
  );
}
