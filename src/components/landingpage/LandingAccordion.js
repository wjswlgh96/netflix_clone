import styled from "styled-components";
import { accordionData } from "../../dummydata/dummyDatas";

import Collapsible from "react-collapsible";

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  border-bottom: 8px solid #222;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 4rem auto 2rem;
`;

const _Collapsible = styled(Collapsible)``;

const P = styled.p``;

export default function LandingAccordion() {
  return (
    <Container>
      <Title>자주 묻는 질문</Title>

      {accordionData.map((el, idx) => {
        return (
          <_Collapsible key={idx} trigger={el.title}>
            <P>{el.desc}</P>
          </_Collapsible>
        );
      })}
    </Container>
  );
}
