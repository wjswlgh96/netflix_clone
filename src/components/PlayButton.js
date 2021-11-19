import styled from "styled-components";

import { PlayFill } from "@styled-icons/bootstrap/PlayFill";

const IntroPlayButton = styled.button`
  width: 18%;
  border: 0;
  border-radius: 3px;
  margin: 0.8em 0.5em 0.8em 0;
  padding: 0.4em 0;
  padding-right: 1em;
  font-size: 1.2em;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const PlayImg = styled(PlayFill)`
  width: 33%;
  margin-right: 1em;
`;

function PlayButton() {
  return (
    <IntroPlayButton>
      <PlayImg />
      재생
    </IntroPlayButton>
  );
}

export default PlayButton;
