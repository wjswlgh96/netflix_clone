import { useRef, useState } from "react";
import styled from "styled-components";

import { NavigateNext } from "@styled-icons/material-outlined/NavigateNext";
import { KeyboardArrowLeft } from "@styled-icons/material-twotone/KeyboardArrowLeft";

const PlayContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  overflow: hidden;
`;

const PlayListWrapper = styled.div`
  max-width: 3000px;
  z-index: 1;
  overflow-x: hidden;
  margin-left: 3em;
  margin-bottom: 3em;
  background-color: transparent;
`;

const PlayListTitle = styled.div`
  color: #e5e5e5;
  font-size: 1.3em;
  margin-bottom: 0.5em;
`;

const PlayListDiv = styled.div`
  width: 100%;
  position: relative;
  left: -10em;
  display: flex;
  overflow: hidden;
`;

const PlayListImg = styled.img`
  width: 17%;
  margin-right: 0.5em;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
`;

const NextSpan = styled.span`
  position: relative;
  left: 94%;
`;

const NextImg = styled(NavigateNext)`
  width: 5em;
  height: 8.5em;
  color: white;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.isListHover && !props.isScrollOver) {
      return `
        opacity: 1;
      `;
    }
  }}
`;

const PrevImg = styled(KeyboardArrowLeft)`
  color: white;
  width: 5em;
  height: 8.5em;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &: hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.isListHover && props.isScrollOver) {
      return `
        opacity: 1;
      `;
    }
  }}
`;

function PlayList({ titleValue, movieList, setIsModal }) {
  const [isListHover, setIsListHover] = useState(false);
  const [isScrollOver, setIsScrollOver] = useState(false);

  const scrollX = useRef();
  const speed = 30;

  const onMouseOver = () => {
    setIsListHover(true);
  };

  const onMouseOut = () => {
    setIsListHover(false);
  };

  const onMouseClickNextImg = () => {
    const moveScroll = setInterval(() => {
      scrollX.current.scrollLeft += speed;

      if (scrollX.current.scrollLeft >= 720) {
        clearInterval(moveScroll);
        setIsScrollOver(true);
      } else {
        setIsScrollOver(false);
      }
    }, 10);
  };

  //   console.log(scrollX.current.scrollLeft);

  const onMouseClickPrevImg = () => {
    const moveScroll = setInterval(() => {
      scrollX.current.scrollLeft -= speed;

      if (scrollX.current.scrollLeft <= 0) {
        clearInterval(moveScroll);
        setIsScrollOver(false);
      } else {
        setIsScrollOver(true);
      }
    }, 10);
  };

  return (
    <PlayContentWrapper>
      <PlayListWrapper>
        <PlayListTitle>{titleValue}</PlayListTitle>
        <PlayListDiv
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          ref={scrollX}
        >
          <NextSpan>
            <NextImg
              onClick={onMouseClickNextImg}
              isListHover={isListHover}
              isScrollOver={isScrollOver}
            />
          </NextSpan>
          <NextSpan style={{ left: "59%" }}>
            <PrevImg
              onClick={onMouseClickPrevImg}
              isListHover={isListHover}
              isScrollOver={isScrollOver}
            />
          </NextSpan>
          {movieList.map((el) => {
            return (
              <PlayListImg
                key={el.id}
                src={el.image}
                onClick={() => setIsModal(true)}
              />
            );
          })}
        </PlayListDiv>
      </PlayListWrapper>
    </PlayContentWrapper>
  );
}

export default PlayList;
