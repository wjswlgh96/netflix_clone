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
`;

const AccordionContainer = styled.div`
  width: 60%;
  color: white;
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
`;

const AccordionSpan = styled.span`
  flex: 0.5;
  width: 100%;
  position: relative;
  left: -1.5%;
  font-size: 2rem;
  line-height: 5.5rem;
`;

const AccordionContent = styled.p`
  position: relative;
  width: 91%;
  max-height: 0;
  background-color: #303030;
  margin-bottom: 0.7rem;
  font-size: 1.7rem;
  color: white;
  white-space: pre;
  overflow: hidden;

  ${(props) => {
    if (props.isFocus && props.idx === props.currIndex) {
      return `
        left: 4%;
        padding: 1.7rem 0.6rem 1.7rem 2rem;
        max-height: 20rem;
        transition: max-height 0.2s ease-in-out;
      `;
    }
  }}
`;

const FormContainer = styled.div`
  width: 50%;
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
              <AccordionTitleWrapper>
                <AccordionButton key={idx} onClick={(e) => onClick(e, idx)}>
                  {el.title}
                </AccordionButton>
                {isFocus && currIndex === idx ? (
                  <AccordionSpan>x</AccordionSpan>
                ) : (
                  <AccordionSpan>+</AccordionSpan>
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
