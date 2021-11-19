import styled from "styled-components";

const HeaderSelectWrapper = styled.div`
  margin-right: 2em;
  margin-top: 0.1em;
`;

const HeaderSelect = styled.select`
  font-size: 0.875em;
  padding: 0.47rem 0.7rem;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #aaa;
  border-radius: 3px;
  color: #fff;
`;

const HeaderOption = styled.option``;

function Selector({ isHeaders }) {
  return (
    <>
      {isHeaders ? (
        <HeaderSelectWrapper>
          <HeaderSelect>
            <HeaderOption value="한국어">한국어</HeaderOption>
            <HeaderOption value="English">English</HeaderOption>
          </HeaderSelect>
        </HeaderSelectWrapper>
      ) : (
        <HeaderSelectWrapper style={{ margin: "0" }}>
          <HeaderSelect
            style={{
              color: "#757575",
              border: "1px solid #757575",
              padding: "1em 1.5em 1em 1em",
              margin: "0 0 1em",
              fontSize: "1.2em",
            }}
          >
            <HeaderOption value="한국어">한국어</HeaderOption>
            <HeaderOption value="English">English</HeaderOption>
          </HeaderSelect>
        </HeaderSelectWrapper>
      )}
    </>
  );
}

export default Selector;
