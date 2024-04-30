import React, { useState } from "react";
import styled from "styled-components";
import LamaTube from "../img/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CreateProjectButton = styled.button`
  width: 150px; /* Set width and height to ensure a perfect circle */
  height: 150px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #3ea6ff;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3ea6ff;
  }
`;

const UploadVideoButton = styled.input`
  display: none;
`;

const UploadVideoLabel = styled.label`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const CreateProjectPage = () => {
  const [showUploadVideo, setShowUploadVideo] = useState(false);

  const handleCreateDemoProject = () => {
    setShowUploadVideo(true);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LamaTube} />
          ReviewTube
        </Logo>
        <Title>Create a Demo Project</Title>
        <CreateProjectButton onClick={handleCreateDemoProject}>
          Create Demo Project
        </CreateProjectButton>
        {showUploadVideo && (
          <div>
            <UploadVideoLabel htmlFor="upload-video">Upload Video</UploadVideoLabel>
            <UploadVideoButton type="file" id="upload-video" />
          </div>
        )}
        <p>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default CreateProjectPage;
