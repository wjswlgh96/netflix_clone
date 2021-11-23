import styled from "styled-components";

import InformationIntro from "../components/information/InformationIntro";
import InformationMiddle from "../components/information/InformationMiddle";
import InformationEpisode from "../components/information/InformationEpisode";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  z-index: 20;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #141414;
  margin: 3rem auto;
  border-radius: 8px;
  position: relative;
`;

function Information({ setIsModal, movie }) {
  const onClick = (e) => {
    e.preventDefault();
    setIsModal(false);
  };

  return (
    <Container onClick={onClick}>
      <Wrapper>
        <InformationIntro movie={movie} setIsModal={setIsModal} />
        <InformationMiddle movie={movie} />
        <InformationEpisode movie={movie} />
      </Wrapper>
    </Container>
  );
}

export default Information;
