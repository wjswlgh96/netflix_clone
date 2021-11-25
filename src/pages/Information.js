import { useEffect, useState, useRef } from "react";
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
  const [isOther, setIsOther] = useState(false);
  const scrollY = useRef();

  useEffect(() => {
    if (isOther) {
      let time = 0;
      const ScrollTime = setInterval(() => {
        scrollY.current.scrollTop += 50;
        time += 100;

        if (time >= 3000) {
          setIsOther(false);
          clearInterval(ScrollTime);
        }
      }, 10);
    }
  }, [isOther]);

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
    <Container ref={scrollY} isOther={isOther} onClick={onClick}>
      <Wrapper onMouseOver={onOver} onMouseOut={onOut}>
        <InformationIntro movie={movie[0]} setIsModal={setIsModal} />
        <InformationMiddle setIsOther={setIsOther} movie={movie[0]} />
        <InformationEpisode movie={movie[0]} />
        <InformationFooter movie={movie[0]} />
      </Wrapper>
    </Container>
  );
}

export default Information;
