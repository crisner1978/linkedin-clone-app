import React, { useState } from "react";
import styled from "styled-components";
import Signup from "./Signup";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Login = () => {
  const [join, setJoin] = useState(false);

  return (
    <Container>
      {join ? (
        <Signup />
      ) : (
        <>
          <Nav>
            <a href="/">
              <img src="/images/login-logo.svg" alt="" />
            </a>
            <div className="joinSign_buttons">
              <Join onClick={() => setJoin(!join)}>Join Now</Join>
              <Signin onClick={() => setJoin(!join)}>Sign In</Signin>
            </div>
          </Nav>
          <Section>
            <Hero>
              <h1>Welcome to your professional community</h1>
              <img src="/images/hero-img.svg" alt="" />
            </Hero>
            <Search>
              <Wrapper>
                <a href="https://www.linkedin.com/jobs/jobs-in-smyrna-tn?trk=homepage-basic_intent-module-jobs">
                  Search for a job
                </a>
                <NavigateNextIcon />
              </Wrapper>
              <Wrapper>
                <a href="https://www.linkedin.com/pub/dir/+/+?trk=homepage-basic_intent-module-people">
                  Find a person you know
                </a>
                <NavigateNextIcon />
              </Wrapper>
              <Wrapper>
                <a href="https://www.linkedin.com/learning/search?trk=homepage-basic_intent-module-learning">
                  Learn a new skill
                </a>
                <NavigateNextIcon />
              </Wrapper>
            </Search>
          </Section>
          <Bottom>
            <HeroBottom>
              <h2>
                Join your colleagues, classmates, and friends on LinkedIn.
              </h2>
              <button onClick={() => setJoin(!join)}>Get started</button>
            </HeroBottom>
            <img src="/images/Linkedin-wallpaper.svg" alt="" />
          </Bottom>
        </>
      )}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #fff;
  padding: 0px;
  z-index: -5;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  img {
    object-fit: contain;
    height: 34px;
    @media only screen and (max-width: 768px) {
      padding: 0 5px;
      width: 84px;
      height: 21px;
    }
  }
`;

const Join = styled.button`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border: none;
  color: rgba(0, 0, 0, 0.6);
  background-color: transparent;
  font-weight: 600;
  margin-right: 12px;
  border-radius: 5px;
  transition-duration: 167ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  @media (max-width: 768px) {
    margin: 2px 0 2px 4px;
    padding: 8px 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  color: #0a66c2;
  cursor: pointer;
  transition-duration: 167ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  transition: opacity 334ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 768px) {
    margin: 2px 0 2px 4px;
    padding: 7px 18px;
  }

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media only screen and (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

const Hero = styled.div`
  width: 100%;
  display: block;
  h1 {
    padding: 0 24px 0 24px;
    width: 55%;
    color: #8f5849;
    font-size: 56px;
    font-weight: 200;
    line-height: 70px;
    padding-bottom: 48px;

    @media only screen and (max-width: 768px) {
      width: 75%;
      font-size: 48px;
      font-weight: 300;
      line-height: 60px;
      padding-bottom: 24px;
      text-align: start;
      margin-left: auto;
      margin-right: auto;
    }
    @media only screen and (max-width: 480px) {
      width: 80%;
      font-size: 42px;
    }
  }
  img {
    object-fit: contain;
    width: 670px;
    height: 670px;
    position: absolute;
    top: -10px;
    right: -150px;
    @media only screen and (max-width: 768px) {
      top: 230px;
      width: 374px;
      height: 240px;
      display: flex;
      position: unset;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Search = styled.ul`
  margin-top: 52px;
  padding: 0 24px 0 24px;
  width: 400px;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    margin-top: 20;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 0 24px;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid lightgray;
  cursor: pointer;
  a {
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0px 4px 12px rgb(0 0 0 / 30%);
  }
  span {
    padding-left: 30px;
    font-weight: 500;
  }
`;

const Bottom = styled.section`
  padding: 20px 24px;
  margin-left: 24px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 60px; */
  margin-left: auto;
  margin-right: auto;
  img {
    position: absolute;
    top: 160%;
    right: 0;
    height: 50%;
    width: 100%;
    object-fit: cover;
  }
`;

const HeroBottom = styled.div`
  h2 {
    max-width: 1128px;
    display: block;
    margin-block-start: 20px;
    margin-block-end: 40px;
    font-size: 56px;
    font-weight: 200;
    z-index: 1;
    position: relative;
    margin-top: -60px;
    margin-bottom: 40px;
    word-break: keep-all;
  }
  button {
    z-index: 1;
    border: none;
    padding: 8px 20px;
    position: relative;
    border-radius: 28px;
    color: #fff;
    cursor: pointer;
    transition-duration: 167ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    min-height: 56px;
    text-align: center;
    background-color: #0a66c2;
    transition: opacity 334ms cubic-bezier(0.4, 0, 0.2, 1);
    @media (max-width: 768px) {
      margin: 2px 0 2px 4px;
      padding: 7px 18px;
    }

    &:hover {
      background-color: #004182;
      text-decoration: underline;
    }
  }
`;
