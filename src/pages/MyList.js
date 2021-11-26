import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ListHoverImage from "../components/mylist/ListHoverImage";
import Information from "./Information";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  width: 92%;
  margin: auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  color: white;
  font-size: 1.4rem;
  margin: 1rem 0;

  @media screen and (max-width: 1023px) {
    font-size: 2.5rem;
    margin: 3rem 0 2rem;
  }

  @media screen and (max-width: 767px) {
  }
`;

const MyContentWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  width: 16%;
  padding: 3rem 2rem 3rem 0;

  @media screen and (max-width: 1023px) {
    width: 21%;
  }

  @media screen and (max-width: 767px) {
    width: 30%;
  }
`;

const Image = styled.img`
  border-radius: 2px;
  width: 100%;
  margin: auto;
`;

const NoneContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 10rem auto;
  font-size: 3rem;
`;

export default function MyList({ movieList, myList, setMyList }) {
  const [newArr, setNewArr] = useState([]);
  const [isHoverImage, setIsHoverImage] = useState(false);
  const [currIdx, setCurrIdx] = useState(-1);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    let arr = [];

    if (myList.length > 0) {
      for (let i = 0; i < myList.length; i++) {
        for (let j = 0; j < movieList.length; j++) {
          if (myList[i] === movieList[j].id) {
            arr.push(movieList[j]);
          }
        }
      }

      setNewArr(arr);
    }
  }, [myList]);

  const ImageHover = (e, idx) => {
    e.preventDefault();
    setIsHoverImage(true);
    setCurrIdx(idx);
  };

  const LeaveImage = (e) => {
    e.preventDefault();
    setIsHoverImage(false);
    setCurrIdx(-1);
  };

  return (
    <Container>
      {isModal ? (
        <>
          <Information
            setMyList={setMyList}
            myList={myList}
            movie={movieList.filter((el) => {
              return el.id === currIdx;
            })}
            setIsModal={setIsModal}
          />
          <Header isMain={false} />
          <Wrapper>
            <TitleWrapper>
              <Title>내가 찜한 콘텐츠</Title>
            </TitleWrapper>
            <MyContentWrapper>
              {myList.length > 0 ? (
                newArr.map((el, idx) => {
                  return (
                    <ImageWrapper key={idx}>
                      <Image
                        onMouseEnter={(e) => ImageHover(e, idx)}
                        src={el.listimage}
                      />
                    </ImageWrapper>
                  );
                })
              ) : (
                <NoneContent>콘텐츠가 없습니다!</NoneContent>
              )}
            </MyContentWrapper>
          </Wrapper>
        </>
      ) : (
        <>
          <Header isMain={false} />
          <Wrapper>
            <TitleWrapper>
              <Title>내가 찜한 콘텐츠</Title>
            </TitleWrapper>
            <MyContentWrapper>
              {myList.length > 0 ? (
                newArr.map((el, idx) => {
                  return (
                    <ImageWrapper key={idx} onMouseLeave={LeaveImage}>
                      {isHoverImage && idx === currIdx ? (
                        <ListHoverImage
                          movie={el}
                          myList={myList}
                          setCurrIdx={setCurrIdx}
                          setIsModal={setIsModal}
                          setMyList={setMyList}
                          imageSrc={el.listimage}
                        />
                      ) : (
                        <Image
                          onMouseEnter={(e) => ImageHover(e, idx)}
                          src={el.listimage}
                        />
                      )}
                    </ImageWrapper>
                  );
                })
              ) : (
                <NoneContent>콘텐츠가 없습니다!</NoneContent>
              )}
            </MyContentWrapper>
          </Wrapper>
        </>
      )}
      <Footer />
    </Container>
  );
}
