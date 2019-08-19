import React from "react";
import styled from "styled-components";

import { Container, CountryList } from "../Components";

const Countries = ({ routerProps }) => {
  return (
    <Container>
      <Wrapper>
        <CountryList />
      </Wrapper>
    </Container>
  );
};

// styled components
const Wrapper = styled.div``;

export default Countries;
