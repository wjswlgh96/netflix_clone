import { useState } from "react";
import styled from "styled-components";

import { movies } from "../dummydata/dummyDatas";

import InformationIntro from "../components/InformationIntro";

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 20;
`;

function Information({ setIsModal }) {
  const [movieList, setMovieList] = useState(movies);

  return (
    <Container>
      <InformationIntro />
    </Container>
  );
}

export default Information;
