import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../images/mainlogo.png";

import Footer from "../components/Footer";
import { users } from "../dummydata/dummyDatas";

const LoginContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
  padding: 1rem 2rem;
  z-index: 10;
`;

const HeaderLogo = styled.img`
  width: 12rem;
  height: 4rem;
`;

const LogoLink = styled(Link)`
  background-color: transparent;
  min-height: 5rem;
`;

const ContentImageWrapper = styled.div`
  width: 100%;
  height: 85.1rem;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
`;

const ContentImage = styled.img`
  height: 85.1rem;

  object-fit: cover;
`;

const ImageGradient = styled.div`
  height: 85.1rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const LoginBoxContainer = styled.div`
  padding: 1rem 1rem;
  margin: 0 29rem 7rem;
  background-color: transparent;
`;

const LoginBoxWrapper = styled.div`
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5rem 5rem 0;
`;

const LoginBoxH1 = styled.h1`
  color: white;
  font-size: 2rem;
  padding: 0 0 2rem 0;
`;

const LoginBoxForm = styled.form``;

const LoginBoxFormInputDiv = styled.div``;

const LoginBoxFormInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 2rem 0 0.5rem 0.7rem;
  background-color: #333;

  &: focus {
    border-bottom: 1px solid #e87c03;
  }
`;

const LoginBoxFormLabel = styled.label`
  position: relative;
  color: #8c8c8c;
  top: -2rem;
  bottom: 0;
  left: 1.5rem;
  right: 0;

  &#idLabel {
    ${(props) => {
      if (props.isIdBoxFocus) {
        return `
          font-size: .8rem;
          top: -3rem;
          left: .5rem;
        `;
      }

      if (props.loginId !== undefined) {
        if (props.loginId.length > 0) {
          return `
            font-size: .8rem;
            top: -3rem;
            left: .5rem;
        `;
        }
      }
    }}
  }

  &#passwordLabel {
    ${(props) => {
      if (props.isPasswordBoxFocus) {
        return `
          font-size: .8rem;
          top: -3rem;
          left: .5rem;
        `;
      }

      if (props.password !== undefined) {
        if (props.password.length > 0) {
          return `
            font-size: .8rem;
            top: -3rem;
            left: .5rem;
        `;
        }
      }
    }}
  }
`;

const LoginBoxLoginButton = styled.button`
  width: 100%;
  background-color: red;
  color: white;
  border: 0;
  border-radius: 4px;
  margin: 1.5rem 0 1rem;
  padding: 1.2rem 0 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBoxCacheDiv = styled.div``;

const LoginBoxCheckBox = styled.input`
  box-sizing: border-box;
  appearance: auto;
  background-color: #f3f3f3;
  margin: 0 0.5rem 0 0;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBoxCheckBoxLabel = styled.label`
  color: #b3b3b3;
  font-size: 0.8125rem;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBoxHelpLink = styled(Link)`
  text-decoration: none;
`;

const LoginBoxHelpSpan = styled.span`
  color: #b3b3b3;
  font-size: 0.8125rem;
  float: right;
  padding: 0.2rem 0 0;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [user, setUser] = useState(users);
  const [loginId, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isIdBoxFocus, setIsIdBoxFocus] = useState(false);
  const [isPasswordBoxFocus, setisPasswordBoxFocus] = useState(false);
  const [loginChecked, setLoginChecked] = useState(false);

  useEffect(() => {
    if (loginId === user[0].id && password === user[0].password) {
      setLoginChecked(true);
    } else {
      setLoginChecked(false);
    }
  }, [loginId, password]);

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFocusIdBox = () => {
    setIsIdBoxFocus(true);
  };

  const onBlurIdBox = () => {
    setIsIdBoxFocus(false);
  };

  const onFocusPasswordBox = () => {
    setisPasswordBoxFocus(true);
  };

  const onBlurPasswordBox = () => {
    setisPasswordBoxFocus(false);
  };

  const onClickLoginButton = (e) => {
    e.preventDefault();

    window.location.replace("/main");
  };

  return (
    <>
      <LoginContainer>
        <ContentImageWrapper>
          <ContentImage src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/4b9902df-a2eb-44ba-bc46-734472bdf025/KR-ko-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
          <ImageGradient></ImageGradient>
        </ContentImageWrapper>
        <HeaderWrapper>
          <LogoLink to="/">
            <HeaderLogo src={Logo} />
          </LogoLink>
        </HeaderWrapper>
        <LoginBoxContainer>
          <LoginBoxWrapper>
            <LoginBoxH1>로그인</LoginBoxH1>
            <LoginBoxForm>
              <LoginBoxFormInputDiv>
                <LoginBoxFormInput
                  onChange={onIdChange}
                  onFocus={onFocusIdBox}
                  onBlur={onBlurIdBox}
                  id="inputID"
                  type="text"
                  value={loginId}
                ></LoginBoxFormInput>
                <LoginBoxFormLabel
                  isIdBoxFocus={isIdBoxFocus}
                  loginId={loginId}
                  htmlFor="inputID"
                  id="idLabel"
                >
                  이메일 주소 또는 전화번호
                </LoginBoxFormLabel>
              </LoginBoxFormInputDiv>
              <LoginBoxFormInputDiv>
                <LoginBoxFormInput
                  onChange={onPasswordChange}
                  onFocus={onFocusPasswordBox}
                  onBlur={onBlurPasswordBox}
                  value={password}
                  id="inputPassword"
                  type="password"
                ></LoginBoxFormInput>
                <LoginBoxFormLabel
                  isPasswordBoxFocus={isPasswordBoxFocus}
                  password={password}
                  htmlFor="inputPassword"
                  id="passwordLabel"
                >
                  비밀번호
                </LoginBoxFormLabel>
              </LoginBoxFormInputDiv>
              {loginChecked ? (
                <LoginBoxLoginButton onClick={onClickLoginButton}>
                  로그인
                </LoginBoxLoginButton>
              ) : (
                <LoginBoxLoginButton disabled style={{ opacity: 0.5 }}>
                  로그인
                </LoginBoxLoginButton>
              )}

              <LoginBoxCacheDiv>
                <LoginBoxCheckBox
                  id="checkbox"
                  type="checkbox"
                ></LoginBoxCheckBox>
                <LoginBoxCheckBoxLabel htmlFor="checkbox">
                  로그인 정보 저장
                </LoginBoxCheckBoxLabel>
                <LoginBoxHelpLink to="/">
                  <LoginBoxHelpSpan>메인으로 돌아가기</LoginBoxHelpSpan>
                </LoginBoxHelpLink>
              </LoginBoxCacheDiv>
            </LoginBoxForm>
          </LoginBoxWrapper>
        </LoginBoxContainer>
        <Footer loginOpacity={"0.5"} />
      </LoginContainer>
    </>
  );
}

export default Login;
