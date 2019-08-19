import React from "react";
import styled from "styled-components";

const Footer = props => {
  return (
    <Wrapper>
      <MadeBy>Made By Dmitriy Shin</MadeBy>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.footer`
  background: #222f3e;
  padding: 15px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
`;

const MadeBy = styled.p`
  text-align: center;
`;

export default Footer;
