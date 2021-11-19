import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayList from "../components/PlayList";
import MainIntro from "../components/MainIntro";
import Information from "./Information";

import { movies } from "../dummydata/dummyDatas";
import { useState } from "react";

const MainContainer = styled.div`
  width: 98.9vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function Main() {
  const [movieList, setMovieList] = useState(movies);
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal ? <Information setIsModal={setIsModal} /> : null}
      <MainContainer isModal={isModal}>
        <Header />

        <MainIntro setIsModal={setIsModal} />
        <PlayList
          setIsModal={setIsModal}
          titleValue={"지난 1년간 공개된 콘텐츠"}
          movieList={movieList}
        />
        <PlayList
          setIsModal={setIsModal}
          titleValue={"지금 뜨는 콘텐츠"}
          movieList={movieList}
        />
        <PlayList
          setIsModal={setIsModal}
          titleValue={"당신이 시청 중인 콘텐츠"}
          movieList={movieList}
        />
        <Footer />
      </MainContainer>
    </>
  );
}

export default Main;
