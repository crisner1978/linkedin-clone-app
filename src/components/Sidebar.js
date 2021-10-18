import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../slices/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div>
      <span>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <Container>
      <WrapperTop>
        <img className="avatar_bg" src="/images/BgImg4Link.jpeg" alt="" />
        <Avatar className="avatar" src={user?.photoUrl} />
        <h2>{user.displayName}</h2>
        <h4><a href={`mailto: ${user.email}`}>{user.email}</a></h4>
      </WrapperTop>
      <StatBox>
        <Stats>
          <p>Connections</p>
          <p className="stat_number">236</p>
        </Stats>
        <Stats>
          <p>Who viewed your profile</p>
          <p className="stat_number">176</p>
        </Stats>
      </StatBox>

      <WrapperBottom>
        <p className="sidebar_recent">Recent</p>
        {recentItem("reactjs")}
        {recentItem("react w/redux")}
        {recentItem("programming")}
        {recentItem("web developer")}
        {recentItem("backend")}
      </WrapperBottom>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  max-width: 1128px;
  flex: 0.2;
  height: fit-content;
  text-align: center;
  position: sticky;
  position: -webkit-sticky;
  @media screen and (max-width: 992px) {
    margin-top: 16px;
  }
  @media only screen and (max-width: 768px){
    max-width: 576px;
    margin-top: 5px;
    margin-bottom: 20px;
  }

`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 0;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.9);
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid lightgray;
  h2 {
    font-weight: 500px;
    font-size: 16px;
    line-height: 24px;
  }
  h4 {
    font-weight: 400;
    font-size: 12px;
    flex-wrap: wrap;
    padding: 12px;
  }
  .avatar_bg {
    background-position: center;
    display: block;
    height: 54px;
    margin: -12px -12px 0;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
  .avatar {
    margin: -38px auto 12px;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
  }
`;

const StatBox = styled.div`
  border-top-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: left;
`;

const Stats = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.6);
  .stat_number {
    font-weight: bold !important;
    color: #0a66c2 !important;
  }
`;

const WrapperBottom = styled.div`
  text-align: left;
  padding: 10px 0 0;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-weight: 600;
  .sidebar_recent {
    margin-bottom: 5px;
    margin-left: 10px;
  }
  div {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: whitesmoke;
      color: rgba(0, 0, 0, 0.6);
    }
    span {
      margin: 0 5px;
    }
  }
`;
