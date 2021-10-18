import React from "react";
import styled from "styled-components";

const Widgets = () => {
  return (
    <Container>
      <h1>I'm the WIDGETS</h1>
    </Container>
  );
};

export default Widgets;

const Container = styled.div`
  max-width: 1128px;
  position: sticky;
  flex: 0.2;
  height: fit-content;
  text-align: center;
  @media screen and (max-width: 992px) {
    margin-top: 16px;
  }
`;

