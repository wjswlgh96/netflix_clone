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
  width: 100%;
  margin-left: 3.7rem;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  color: white;
  font-size: 1.5rem;
`;

const SliderWrapper = styled.div`
  width: 100%;
`;

const _Slider = styled(Slider)`
  width: 100%;

  .slick-arrow {
    z-index: 5;
    width: 10vw;
    height: 6vw;

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

    padding: 1.5rem 0;

    :hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
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
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  z-index: 10;
`;

const Image = styled.img`
  width: 16%;
  border-radius: 4px;
`;

const LeftImage = styled(KeyboardArrowLeft)`
  color: white;
  height: 6.5vw;
`;

const RightImage = styled(NavigateNext)`
  color: white;
  height: 6.5vw;
`;

function PlayList({ setCurrIdx, titleValue, movieList, setIsModal }) {
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

  const onClickImage = (e, idx) => {
    e.preventDefault();
  };

  const onMouseEnterImg = (e, idx) => {
    e.preventDefault();
    setImgHover(true);
    setCurrImgIdx(idx);
  };

  const onMouseLeaveImg = (e) => {
    console.log("bye");
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
  };

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>{titleValue}</TitleWrapper>
        <SliderWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <_Slider {...settings}>
            {movieList.map((el, idx) => {
              return (
                <ImageWrapper
                  key={idx}
                  onMouseEnter={(e) => onMouseEnterImg(e, idx)}
                  onMouseLeave={onMouseLeaveImg}
                >
                  {isImgHover && idx === currImgIdx ? (
                    <HoverImage
                      setCurrIdx={setCurrIdx}
                      setIsModal={setIsModal}
                      imageSrc={el.listimage}
                      movie={el}
                    />
                  ) : (
                    <Image
                      onClick={(e) => onClickImage(e, idx)}
                      src={el.listimage}
                    />
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
