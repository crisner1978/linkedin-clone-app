import styled from "styled-components";
import Dropdown from "./Dropdown";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";

const Header = ({ dropdown, dropdownRef, openUp }) => {

  return (
    <Container>
      <Wrapper>
        <ContentLeft>
            <img src="/images/home-logo.svg" alt="" />
          <Search>
            <SearchBox>
              <SearchIcon fontSize="small" className="seaIcon" />
              <p className="search_text">Search</p>
              <input type="text" placeholder="Search" />
            </SearchBox>
          </Search>
        </ContentLeft>
        <ContentRight>
          <HeaderOption title="Home" Icon={HomeIcon} to="/" />
          <HeaderOption
            title="My Network"
            Icon={SupervisorAccountIcon}
            to="/mynetwork"
          />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} to="/jobs" />
          <HeaderOption title="Messaging" Icon={ChatIcon} to="/messaging" />
          <HeaderOption
            title="Notifications"
            Icon={NotificationsIcon}
            to="/notifications"
          />
          <User>
            <HeaderOption
              to
              title="Me"
              avatar="true"
              onClick={openUp}
              drop
              image="/images/down-icon.svg"
            />
            {dropdown && <Dropdown dropdownRef={dropdownRef} openUp={openUp} />}
          </User>
          <Work>
            <HeaderOption
              title="Work"
              Icon={AppsIcon}
              to
              drop
              image="/images/down-icon.svg"
            />
            {/* Make a sidebar that shows when clicked */}
            <HeaderOption
              title="Learning"
              Icon={ChromeReaderModeOutlinedIcon}
              href="https://www.linkedin.com/learning/?trk=nav_neptune_learning&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BK26XnkbATj%2BwWDvaemGhCg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-nav_learning"
            />
          </Work>
        </ContentRight>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-color: #fff;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  vertical-align: baseline;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  width: 100%;
`;

const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: contain;
    margin-right: 0;
  }
`;

const Search = styled.div`
  padding: 8px;
  display:  flex;
  align-items: center;
  border-radius: 4px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.9);
  
  font-weight: 400;
  max-width: 280px;
  font-size: 14px;
  @media (min-width: 1024px) {
    .search_text {
      display: none;
    }
  }
  .search_text {
    font-size: 12px;
  }
  
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #eef3f8;
  padding-left: 13px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-bottom: 4px; */
  }.seaIcon {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 1024px) {
    background-color: #fff;
    .seaIcon {
      font-size: 22px;
    }
  }
  @media (max-width: 854px) {
    .search_text {
      display: none;
    }
  }
  input {
    color: #000;
    outline: none;
    border: none;
    background: none;
    padding-left: 7px;
    margin-right: 85px;
    height: 34px;
    font-weight: 500;
    max-width: 280px;
    line-height: 1.75;
    width: 100%;
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

const ContentRight = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  margin-left: auto;
`;

const User = styled.div`
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  position: relative;
  list-style-type: none;
  @media (max-width: 768px) {
    min-width: 70px;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

