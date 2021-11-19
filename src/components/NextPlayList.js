import styled from "styled-components";

const NextPlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;

const NextPlayListWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 2em;
  margin: 2em;
`;

const NextPlayListNumber = styled.div`
  color: #d2d2d2;
  font-size: 2em;
  line-height: 3em;
  margin-right: 1em;
`;

const NextPlayListImg = styled.img`
  width: 20%;
  border-radius: 1em;
  margin-right: 1em;
`;

const NextPlayListContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NextPlayListTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const NextPlayListTitle = styled.div`
  flex: 9;
  font-size: 1.3em;
`;

const NextPlayListPlayTime = styled.div`
  flex: 1;
  font-size: 1.3em;
`;

const NextPlayListDescWrapper = styled.div`
  width: 90%;
  color: #d2d2d2;
  font-size: 1.1em;
  line-height: 1.5em;
`;

function NextPlayList({ movieList }) {
  console.log(movieList);

  const [time] = movieList.map((el) => {
    return el.time;
  });

  console.log(time);

  return (
    <NextPlayListContainer>
      {time.map((el) => {
        return (
          <NextPlayListWrapper>
            <NextPlayListNumber>{el.id}</NextPlayListNumber>
            <NextPlayListImg src={el.image} />
            <NextPlayListContentWrapper>
              <NextPlayListTitleWrapper>
                <NextPlayListTitle>{el.title}</NextPlayListTitle>
                <NextPlayListPlayTime>{el.playtime}</NextPlayListPlayTime>
              </NextPlayListTitleWrapper>
              <NextPlayListDescWrapper>{el.content}</NextPlayListDescWrapper>
            </NextPlayListContentWrapper>
          </NextPlayListWrapper>
        );
      })}
    </NextPlayListContainer>
  );
}

export default NextPlayList;
