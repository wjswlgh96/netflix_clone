import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { NavigateNext } from "@styled-icons/material-outlined/NavigateNext";
import { KeyboardArrowLeft } from "@styled-icons/material-twotone/KeyboardArrowLeft";
import HoverImage from "./HoverImage";

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: black;
`;

const Wrapper = styled.div`
  width: 99%;
  margin-left: 3.7rem;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  color: white;
  font-size: 1.5rem;

  @media screen and (max-width: 1023px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
`;

const _Slider = styled(Slider)`
  width: 100%;

  .slick-arrow {
    z-index: 5;
    width: 10vw;
    height: 7vw;

    :hover {
      color: white;
    }

    :focus {
      color: white;
    }
  }

  .slick-next {
    left: 88%;
    top: 30%;
  }

  .slick-prev {
    top: 30%;
  }

  .slick-list {
    width: 100%;
  }

  .slick-slide {
    width: 100%;

    padding: 2rem 0 2rem 0;

    :hover {
      cursor: pointer;
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;

      @media screen and (max-width: 1023px) {
        padding: 2rem;
      }

      @media screen and (max-width: 767px) {
        padding: 2.5rem;
      }
    }

    :out {
      transform: scale(1);
      transition: transform 0.2s ease-in-out;
    }
  }

  .slick-dots {
    position: absolute;
    left: 89%;
    top: -1%;
    width: 10%;
    height: 10%;
    color: #ffffff;
    overflow: hidden;
    z-index: 5;

    .slick-active {
      button::before {
        color: #ffffff;
      }
    }

    button::before {
      color: #e9e9e9;
    }

    @media screen and (max-width: 1023px) {
      left: 85%;
      top: -1.5%;
    }

    @media screen and (max-width: 767px) {
      width: 20%;
      left: 77%;
      top: -2%;
    }
  }

  ${(props) => {
    if (!props.isImgHover) {
      return `
        .slick-next {
          top: 50%;
        }

        .slick-prev {
          top: 50%;
        }
      `;
    }
  }}

  ${(props) => {
    switch (props.currImgIdx) {
      case 0: {
        return `
        .slick-slide {
          :hover {
            transform: scale(1.2) translate(50px, 0);
            transition: transform 0.2s ease-in-out;
          }
        }
        `;
      }
      case 5: {
        return `
        .slick-slide {
          :hover {
            transform: scale(1.2) translate(-100px, 0);
            transition: transform 0.2s ease-in-out;
          }
        }
        `;
      }
      case 6: {
        return `
        .slick-slide {
          :hover {
            transform: scale(1.2) translate(50px, 0);
            transition: transform 0.2s ease-in-out;
          }
        }
        `;
      }
      case 11: {
        return `
        .slick-slide {
          :hover {
            transform: scale(1.2) translate(-100px, 0);
            transition: transform 0.2s ease-in-out;
          }
        }
        `;
      }
    }
  }}
`;

const ImageWrapper = styled.div`
  width: 100%;
  z-index: 10;
`;

const Image = styled.img`
  width: 16%;
  border-radius: 4px;

  @media screen and (max-width: 1023px) {
    width: 23%;
  }

  @media screen and (max-width: 767px) {
    width: 28%;
  }
`;

const LeftImage = styled(KeyboardArrowLeft)`
  color: white;
  height: 6.5vw;
`;

const RightImage = styled(NavigateNext)`
  color: white;
  height: 6.5vw;
`;

function PlayList({
  setCurrIdx,
  titleValue,
  movieList,
  setIsModal,
  myList,
  setMyList,
}) {
  const [isHover, setIsHover] = useState(false);
  const [isImgHover, setImgHover] = useState(false);
  const [currImgIdx, setCurrImgIdx] = useState(-1);

  const onMouseEnter = (e) => {
    e.preventDefault();
    setIsHover(true);
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsHover(false);
  };

  const onMouseEnterImg = (e, idx) => {
    e.preventDefault();
    setImgHover(true);
    setCurrImgIdx(idx);
  };

  const onMouseLeaveImg = (e) => {
    e.preventDefault();
    setImgHover(false);
    setCurrImgIdx(-1);
  };

  const settings = {
    dots: isHover,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: isHover,
    nextArrow: <RightImage />,
    prevArrow: <LeftImage />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>{titleValue}</TitleWrapper>
        <SliderWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <_Slider
            {...settings}
            isImgHover={isImgHover}
            currImgIdx={currImgIdx}
          >
            {movieList.map((el, idx) => {
              return (
                <ImageWrapper
                  key={idx}
                  onMouseEnter={(e) => onMouseEnterImg(e, idx)}
                  onMouseLeave={onMouseLeaveImg}
                >
                  {isImgHover && idx === currImgIdx ? (
                    <HoverImage
                      myList={myList}
                      setMyList={setMyList}
                      setCurrIdx={setCurrIdx}
                      setIsModal={setIsModal}
                      imageSrc={el.listimage}
                      movie={el}
                    />
                  ) : (
                    <Image src={el.listimage} />
                  )}
                </ImageWrapper>
              );
            })}
          </_Slider>
        </SliderWrapper>
      </Wrapper>
    </Container>
  );
}

export default PlayList;
