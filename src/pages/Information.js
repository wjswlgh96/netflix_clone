import { useState } from "react";
import styled from "styled-components";

import { movies } from "../dummydata/dummyDatas";

import InformationIntro from "../components/InformationIntro";
import InformationMiddle from "../components/InformationMiddle";

const InformationContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 1vw;

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const InformationWrapper = styled.div`
  width: 65%;
  background-color: #222;
  border: 0;
  border-radius: 5px;
  margin: 2em 0;
  color: white;
  overflow-x: hidden;
  overflow-y: auto;
`;

function Information({ setIsModal }) {
  const [movieList, setMovieList] = useState(movies);

  return (
    <InformationContainer>
      <InformationWrapper>
        <InformationIntro setIsModal={setIsModal} movieList={movieList} />
        <InformationMiddle movieList={movieList} />
      </InformationWrapper>
    </InformationContainer>
  );
}

export default Information;
