import React from "react";
import styled from "styled-components";

import { Container, Title } from "../Components";

const Main = props => {
  return (
    <Container>
      <Wrapper>
        <Title>Scoutbase Challenge</Title>
        <Description>
          A simple web application made for <b>Scoutbase</b> Company.
          <br />
          The application consists of 3 routes: <b>/, /countries</b> and{" "}
          <b> /countries/:code</b>
          <br />
          The reason of creating this app is for the Job Application
        </Description>
      </Wrapper>
    </Container>
  );
};

// styled components
const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 20px;
  font-weight: 400;
`;

export default Main;
