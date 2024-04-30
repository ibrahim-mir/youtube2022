import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh;
`;

const StyledBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SignInContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  text-align: center; /* Center horizontally */
  flex-direction: column;
`;

const SignInButton = styled(Link)`
  padding: 10px 20px;
  background-color: #3ea6ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Container>
      <StyledBox>
        <SignInContainer>
          <h2>Sign in to continue</h2>
          <SignInButton to="/signin">Sign In</SignInButton>
        </SignInContainer>
      </StyledBox>
    </Container>
  );
};

export default Home;
