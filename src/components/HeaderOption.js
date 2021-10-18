import { Avatar } from "@mui/material";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

const HeaderOption = ({
  avatar,
  title,
  Icon,
  to,
  onClick,
  drop = false,
  image,
}) => {
  const user = useSelector(selectUser);

  return (
    <Container to={to} onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon" src={user?.photoUrl} />
      )}
      <h3 className="headerOption_title">
        {title}
        {drop && <img src={image} alt="drop icon" />}
      </h3>
    </Container>
  );
};

export default HeaderOption;

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  text-decoration: none;
  line-height: 1.5;
  min-height: 52px;
  min-width: 80px;
  transform: scaleX(1);
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    min-width: 70px;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: ease 127ms all;
  }
  &.active {
    border-bottom: 2px solid black;
    color: #000;
  }

  .headerOption_icon {
    object-fit: contain;
    height: 24px;
    width: 24px;
  }

  @media (max-width: 854px) {
    .headerOption_title {
      display: none;
    }
  }
`;
