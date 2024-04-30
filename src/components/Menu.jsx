import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LamaTube from "../img/logo.png";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const MyProjectsButton = styled(Item)`
  font-weight: bold;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  // Here you can fetch the uploaded projects and manage them using state or props

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
            ReviewTube
          </Logo>
        </Link>
        <Link to="/myprojects" style={{ textDecoration: "none", color: "inherit" }}>
        <MyProjectsButton>
          <VideoLibraryOutlinedIcon />
          My Projects
        </MyProjectsButton>
        </Link>
        <Hr />
        <Item>
          <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
            Sign in to like videos, comment, and subscribe.
          </Link>
        </Item>
        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
