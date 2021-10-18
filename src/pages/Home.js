import React from "react";
import styled from "styled-components";
import Ad from "../components/Ad";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import UseViewport from "../UseViewport";
import { url } from "../utilities/Utilities";

const Home = () => {
  const { width } = UseViewport();
  const breakpoint = 992;

  return (
    <Container>
      {width > breakpoint && (
        <Ad
          title="Tap into proven talent."
          desc="- In-demand talent, on demand. Upwork is how."
          href={url}
        />
      )}
      <Wrapper>
        <Sidebar />
        <Feed />
        <Widgets />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 1128px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  @media only screen and (max-width: 768px){
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  margin-top: 0;
  overflow-y: unset;
  display: flex;
  margin: 1rem 0;
  @media screen and (max-width: 1200px) {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;
