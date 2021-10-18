import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import styled from "styled-components";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const Posts = forwardRef(({ name, desc, message, photoUrl }, ref) => {
  return (
    <Section ref={ref}>
      <Header>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="user_info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </Header>
      <PostWrapper>
        <p>{message}</p>
      </PostWrapper>
      <PostIcons>
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" />
        <InputOption Icon={InsertCommentOutlinedIcon} title="Comment" />
        <InputOption Icon={ReplyOutlinedIcon} title="Share" />
        <InputOption Icon={NearMeOutlinedIcon} title="Send" />
      </PostIcons>
    </Section>
  );
});

export default Posts;

const Section = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  .user_info {
    margin-left: 10px;
    p {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const PostWrapper = styled.div`
  overflow-wrap: anywhere;
  p {
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    font-weight: 400;
  }
`;

const PostIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
