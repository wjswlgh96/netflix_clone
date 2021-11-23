import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const Video = styled.video`
  width: 100%;
`;

export default function Play() {
  return (
    <Container>
      <Video autoPlay playsInline>
        <source
          src="blob:https://www.netflix.com/1051f63d-df80-4b9f-b4d1-dc096dc86f7b"
          type="video/mp4"
        />
      </Video>
    </Container>
  );
}
