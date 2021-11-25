import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayList from "../components/mainpage/PlayList";
import MainIntro from "../components/mainpage/MainIntro";
import Information from "./Information";

import { mainTitle } from "../dummydata/dummyDatas";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

function Main({ movieList }) {
  const [isScroll, setIsScroll] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currIdx, setCurrIdx] = useState(-1);

  const onScroll = (e) => {
    if (e.target.scrollTop > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <Container onScroll={onScroll}>
      {isModal ? (
        <>
          <Information
            movie={movieList.filter((el) => {
              return el.id === currIdx;
            })}
            setIsModal={setIsModal}
          />
          <Header isScroll={isScroll} />
          <MainIntro setIsModal={setIsModal} setCurrIdx={setCurrIdx} />
          {mainTitle.map((el, idx) => {
            return (
              <PlayList
                key={idx}
                setIsModal={setIsModal}
                setCurrIdx={setCurrIdx}
                titleValue={el}
                movieList={movieList}
              />
            );
          })}
          <Footer />
        </>
      ) : (
        <>
          <Header isScroll={isScroll} />
          <MainIntro setIsModal={setIsModal} setCurrIdx={setCurrIdx} />
          {mainTitle.map((el, idx) => {
            return (
              <PlayList
                key={idx}
                setIsModal={setIsModal}
                setCurrIdx={setCurrIdx}
                titleValue={el}
                movieList={movieList}
              />
            );
          })}
          <Footer />
        </>
      )}
    </Container>
  );
}

export default Main;
