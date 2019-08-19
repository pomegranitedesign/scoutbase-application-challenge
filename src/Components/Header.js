import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Container from "./Container";

const Header = props => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <TitleContainer>
            <Title>Scoutbase Countries</Title>
          </TitleContainer>

          <Navigation>
            <List>
              <li>
                <Link exact to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/countries">Countries</Link>
              </li>
            </List>
          </Navigation>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.header`
  background: #222f3e;
  padding: 15px 0px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// this container only to represent a title / logo of the website
const TitleContainer = styled.div``;

const Title = styled.h1`
  color: #1dd1a1;
  font-weight: 900;
  font-size: 30px;
  cursor: pointer;
`;

const Navigation = styled.nav``;

const List = styled.ul`
  li {
    list-style: none;
    display: inline-block;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-right: 15px;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: #1dd1a1;
  }
`;

export default Header;
