import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { NavigateNext } from "@styled-icons/material-outlined/NavigateNext";
import { KeyboardArrowLeft } from "@styled-icons/material-twotone/KeyboardArrowLeft";

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: black;
`;

const Wrapper = styled.div`
  width: 95%;
  position: relative;
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

  :hover {
    cursor: pointer;
  }
`;

const _Slider = styled(Slider)`
  width: 100%;
  padding-top: 1.5rem;

  .slick-arrow {
    z-index: 5;
    width: 10vw;
    height: 15vh;

    :hover {
      color: white;
    }

    :focus {
      color: white;
    }
  }

  .slick-dots {
    position: absolute;
    left: 89%;
    top: -3%;
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

  margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
`;

const Image = styled.img`
  position: relative;
  width: 16%;
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
    setIsModal(true);
    setCurrIdx(idx);
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
                <ImageWrapper key={idx}>
                  <Image
                    onClick={(e) => onClickImage(e, idx)}
                    src={el.listimage}
                  />
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
