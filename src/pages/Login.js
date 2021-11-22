import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginHeader from "../components/loginpage/LoginHeader";
import LoginBackground from "../components/loginpage/LoginBackground";
import LoginBox from "../components/loginpage/LoginBox";
import Footer from "../components/Footer";
import { users } from "../dummydata/dummyDatas";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <LoginHeader />
      <LoginBackground />
      <LoginBox />
      <Footer loginOpacity={true} />
    </Container>
  );
}

export default Login;
