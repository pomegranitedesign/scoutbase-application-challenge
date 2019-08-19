import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Container } from "../Components";

const Country = props => {
  const { loading, error, data } = useQuery(
    gql`
      query Country($code: String!) {
        country(code: $code) {
          name
          currency
          phone
        }
      }
    `,
    { variables: { code: props.match.params.code } }
  );

  if (loading) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h1>Error Fetching Data...</h1>
      </Container>
    );
  }

  const { name, currency, phone } = data.country;
  return (
    <Wrapper>
      <Container>
        <Title>{name}</Title>

        <Currency>
          <i>Currency</i>: <b>{currency}</b>
        </Currency>

        <Phone>
          <i>Phone Code</i>: <b>{phone}</b>
        </Phone>
      </Container>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 50px;
`;

const Currency = styled.p`
  font-size: 20px;
`;

const Phone = styled.p`
  font-size: 20px;
`;

export default Country;
