import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "@firebase/auth";
import { logout } from "../slices/userSlice";
import { auth } from "../firebase";
import { useHistory } from "react-router";

const Dropdown = ({ dropdownRef, openUp }) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const logOutApp = () => {
    dispatch(logout());
    signOut(auth);
    history.push("/");
  }

  return (
    <Container ref={dropdownRef}>
      <h2>Manage</h2>
      <Wrapper>
        <DropdownLink to="/posts" onClick={openUp}>
          <span>Posts & Activity</span>
        </DropdownLink>
      </Wrapper>
      <Wrapper>
        <DropdownLink to="/jobs" onClick={openUp}>
          <span>Job Posting Account</span>
        </DropdownLink>
      </Wrapper>
      <Wrapper>
        <DropdownLink to onClick={openUp}>
          <span onClick={logOutApp}>Sign Out</span>
        </DropdownLink>
      </Wrapper>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  max-height: calc(100vh - 64px);
  padding: 5px 0;
  right: 0;
  width: 288px;
  border-radius: 0.8rem 0 0.8rem 0.8rem;
  background-color: #fff;
  top: calc(100% + 8px);
  background-clip: padding-box;
  display: inline-block;
  position: absolute;
  box-sizing: border-box;
  z-index: 999;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 4px 4px rgba(0, 0, 0, 0.3) !important;
  border: none !important;
  h2 {
    color: #000;
    cursor: text;
    padding: 8px 16px;
  }
`;

const Wrapper = styled.li`
  width: 100%;
  height: 100%;
  padding: 2px 0;
  &:hover {
    text-decoration: underline !important;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  width: max-content;
  height: 100%;
  padding: 0px 16px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 14px !important;
    font-weight: 400;
    &:hover {
      color: rgba(0, 0, 0, 0.6) !important;
      text-decoration: underline !important;
    }
  }
`;
