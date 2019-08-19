import React, { Fragment } from "react";
import styled from "styled-components";
import uuid from "uuid/v4";
import { Link } from "react-router-dom";

const CountrySingle = ({ name, languages, code }) => {
  return (
    <Wrapper>
      <CountryName>{name}</CountryName>
      <Languages>
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          Languages spoken
        </p>
        {languages.map(language => (
          <Fragment>
            - <Language key={uuid()}>{language.name}</Language>
            <br />
          </Fragment>
        ))}
      </Languages>

      <Button to={`/countries/${code}`}>Read More</Button>
    </Wrapper>
  );
};

// styled components
const Wrapper = styled.div`
  height: 300px;
  width: 250px;
  border: 1px solid #4834d4;
  border-radius: 3px;
  padding: 10px;
  position: relative;
  margin: 0px auto 20px auto;
`;

const CountryName = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;

const Languages = styled.ul`
  margin-top: 10px;
`;

const Language = styled.li`
  list-style: none;
  display: inline-block;
  font-size: 16px;
  font-style: italic;
`;

const Button = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  background: #2654ff;
  padding: 10px;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  display: block;
  text-align: center;
  position: absolute;
  bottom: 20px;
  width: 200px;
  left: 20px;
  transition: background 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: #222f3e;
  }
`;

export default CountrySingle;
