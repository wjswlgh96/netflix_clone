import { useEffect, useState } from "react";
import styled from "styled-components";

import { landingData } from "../dummydata/dummyDatas";

import LandingHeader from "../components/landingpage/LandingHeader";
import LandingIntro from "../components/landingpage/LandingIntro";
import LandingVideo from "../components/landingpage/LandingVideo";
import LandingContent from "../components/landingpage/LandingContent";
import LandingAccordion from "../components/landingpage/LandingAccordion";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100%;
`;

const IntroContainer = styled.div`
  width: 100%;
`;

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <LandingHeader />
        <IntroContainer>
          <LandingIntro />
        </IntroContainer>
        {landingData.map((el, idx) => {
          if (idx % 2 !== 0) {
            return (
              <LandingContent
                key={idx}
                title={el.title}
                subTitle={el.subTitle}
                imageSrc={el.imageSrc}
              />
            );
          } else if (idx === 2) {
            return (
              <LandingVideo
                key={idx}
                isThird={true}
                title={el.title}
                subTitle={el.subTitle}
                imageSrc={el.imageSrc}
                videoSrc={el.videoSrc}
              />
            );
          } else {
            return (
              <LandingVideo
                key={idx}
                title={el.title}
                subTitle={el.subTitle}
                imageSrc={el.imageSrc}
                videoSrc={el.videoSrc}
              />
            );
          }
        })}
        <LandingAccordion />
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Landing;
