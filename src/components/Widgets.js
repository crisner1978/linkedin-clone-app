import React from "react";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="articles">
      <Left>
        <FiberManualRecordIcon fontSize="small" />
        <h2>{heading}</h2>
      </Left>
      <Right>
        <p>{subtitle}</p>
      </Right>
    </div>
  );

  return (
    <Container>
      <Header>
        <h2>Linkedin News</h2>
        <InfoIcon color="disabled" fontSize="small" />
      </Header>
      {newsArticle("React JS: -v 20 beta", "Top news - 12,750 readers")}
      {newsArticle("Coronavirus: TN updates", "Top news - 89 readers")}
      {newsArticle("Joe Biden: Found", "Top news - 6,702 readers")}
      {newsArticle(
        "Kamala Harris: Stopped laughing",
        "Top news - 3,357 readers"
      )}
      {newsArticle("Democrats: Rise and Fall", "Top news - 1,124 readers")}
    </Container>
  );
};

export default Widgets;

const Container = styled.div`
  max-width: 1128px;
  position: sticky;
  flex: 0.25;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: #fff;
  /* margin: -12px 20px 0; */
  padding-bottom: 10px;
  margin-top: -12px;
  .articles {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: whitesmoke;
    }
  }
  h2 {
    color: rgba(0, 0, 0, 0.9) !important;
    font-size: 14px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }

  @media screen and (max-width: 992px) {
    margin-top: 4px;
  }
  @media only screen and (max-width: 768px){
    max-width: 576px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  h2 {
    color: rgba(0, 0, 0, 0.9) !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const Left = styled.div`
  color: rgba(0, 0, 0, 0.9) !important;
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    font-size: 5px;
    margin-right: 5px;
  }
`;

const Right = styled.div`
  margin-left: 10px;
`;
