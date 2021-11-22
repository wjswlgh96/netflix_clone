import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayList from "../components/mainpage/PlayList";
import MainIntro from "../components/mainpage/MainIntro";
import Information from "./Information";

import { movies, mainTitle } from "../dummydata/dummyDatas";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

function Main() {
  const [movieList, setMovieList] = useState(movies);
  const [isModal, setIsModal] = useState(false);

  console.log(isModal);

  return (
    <>
      {isModal ? (
        <Container>
          <Information />
          <Header />
          <MainIntro setIsModal={setIsModal} />
          {mainTitle.map((el, idx) => {
            return <PlayList key={idx} titleValue={el} movieList={movieList} />;
          })}
          <Footer />
        </Container>
      ) : (
        <Container>
          <Header />
          <MainIntro setIsModal={setIsModal} />
          {mainTitle.map((el, idx) => {
            return <PlayList key={idx} titleValue={el} movieList={movieList} />;
          })}
          <Footer />
        </Container>
      )}
    </>
  );
}

export default Main;
