import styled from "styled-components";

import NextPlayList from "./NextPlayList";

const InformationMiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 2em;
`;

const InformationMiddleTitle = styled.div`
  flex: 8;
  font-size: 1.8em;
`;

const InformationMiddleSubTitle = styled.div`
  flex: 1.1;
  font-size: 1.4em;
`;

function InformationMiddle({ movieList }) {
  return (
    <>
      <InformationMiddleWrapper>
        <InformationMiddleTitle>회차</InformationMiddleTitle>
        <InformationMiddleSubTitle>시즌 1</InformationMiddleSubTitle>
      </InformationMiddleWrapper>
      <NextPlayList movieList={movieList} />
    </>
  );
}

export default InformationMiddle;
