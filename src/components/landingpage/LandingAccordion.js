import { useState } from "react";
import styled from "styled-components";
import { accordionData } from "../../dummydata/dummyDatas";

import LandingForm from "./LandingForm";

const Container = styled.div`
  width: 100%;
  background-color: black;
  border-bottom: 8px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 4rem auto 3.4rem;
  color: white;

  @media screen and (max-width: 1023px) {
    font-size: 5rem;
    margin: 8rem auto 5rem;
  }
`;

const AccordionContainer = styled.div`
  width: 60%;
  color: white;

  @media screen and (max-width: 1023px) {
    width: 75%;
  }
`;

const AccordionTitleWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.1rem;
`;

const AccordionButton = styled.button`
  flex: 9.5;
  position: relative;
  left: 4%;
  width: 100%;
  background-color: #303030;
  color: white;
  text-align: left;
  padding: 1.7rem 2rem;
  font-size: 1.7rem;

  @media screen and (max-width: 1023px) {
    width: 100%;
    font-size: 2.6rem;
    font-weight: 300;
    padding: 2.3rem 3rem;
  }
`;

const AccordionSpan = styled.span`
  flex: 0.5;
  width: 100%;
  position: relative;
  left: -1.5%;
  font-size: 2rem;
  line-height: 5.5rem;

  @media screen and (max-width: 1023px) {
    font-size: 4rem;
    font-weight: 300;
    top: 1.5vw;
  }
`;

const AccordionContent = styled.p`
  position: relative;
  width: 91%;
  max-height: 0;
  background-color: #303030;
  margin-bottom: 0.7rem;
  font-size: 1.7rem;
  color: white;
  white-space: pre-wrap;
  overflow: hidden;

  ${(props) => {
    if (props.isFocus && props.idx === props.currIndex) {
      return `
        left: 4%;
        padding: 1.7rem 0.6rem 1.7rem 2rem;
        max-height: 20rem;
        transition: max-height 0.2s ease-in-out;

        @media screen and (max-width: 1023px) {
          font-size: 2.5rem;
          line-height: 3.5rem;
          width: 87.5%;
          font-weight: 300;
          padding: 2rem 3rem 2rem 3rem;
          max-height: 40rem;
          white-space: pre-wrap;
        }
      `;
    }
  }}
`;

const FormContainer = styled.div`
  width: 100%;
  margin: 4rem auto;
`;

export default function LandingAccordion() {
  const [isFocus, setIsFocus] = useState(false);
  const [currIndex, setCurrIndex] = useState(-1);

  const onClick = (e, idx) => {
    e.preventDefault();

    if (!isFocus) {
      setIsFocus(true);
      setCurrIndex(idx);
    } else if (isFocus && idx === currIndex) {
      setIsFocus(false);
      setCurrIndex(-1);
    } else if (isFocus && idx !== currIndex) {
      setCurrIndex(idx);
    }
  };

  return (
    <Container>
      <Title>자주 묻는 질문</Title>
      <AccordionContainer>
        {accordionData.map((el, idx) => {
          return (
            <>
              <AccordionTitleWrapper key={idx}>
                <AccordionButton onClick={(e) => onClick(e, idx)}>
                  {el.title}
                </AccordionButton>
                {isFocus && currIndex === idx ? (
                  <AccordionSpan key={idx}>x</AccordionSpan>
                ) : (
                  <AccordionSpan key={idx}>+</AccordionSpan>
                )}
              </AccordionTitleWrapper>
              <AccordionContent
                isFocus={isFocus}
                idx={idx}
                currIndex={currIndex}
              >
                {el.desc}
              </AccordionContent>
            </>
          );
        })}
      </AccordionContainer>
      <FormContainer>
        <LandingForm />
      </FormContainer>
    </Container>
  );
}
