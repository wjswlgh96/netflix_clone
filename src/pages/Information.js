import { useState } from "react";
import styled from "styled-components";

import InformationIntro from "../components/information/InformationIntro";
import InformationMiddle from "../components/information/InformationMiddle";
import InformationEpisode from "../components/information/InformationEpisode";
import InformationFooter from "../components/information/InformationFooter";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  z-index: 6;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.5s linear;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #141414;
  margin: 3rem auto;
  border-radius: 8px;
  position: relative;
  z-index: 15;
`;

function Information({ setIsModal, movie }) {
  const [isEnter, setIsEnter] = useState(false);

  const onClick = (e) => {
    e.preventDefault();

    if (isEnter) {
      setIsModal(false);
    }
  };

  const onOver = (e) => {
    e.preventDefault();
    setIsEnter(false);
  };

  const onOut = (e) => {
    e.preventDefault();
    setIsEnter(true);
  };

  return (
    <Container onClick={onClick}>
      <Wrapper onMouseOver={onOver} onMouseOut={onOut}>
        <InformationIntro movie={movie} setIsModal={setIsModal} />
        <InformationMiddle movie={movie} />
        <InformationEpisode movie={movie} />
        <InformationFooter movie={movie} />
      </Wrapper>
    </Container>
  );
}

export default Information;
