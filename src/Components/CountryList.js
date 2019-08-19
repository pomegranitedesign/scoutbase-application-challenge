import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import uuid from "uuid/v4";

import CountrySingle from "./CountrySingle";

const CountryList = props => {
  const { loading, error, data } = useQuery(gql`
    query Countries {
      countries {
        name
        code
        continent {
          name
        }
        languages {
          name
        }
      }
    }
  `);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error Fetching Data...</h1>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.countries.map(country => (
        <CountrySingle key={uuid()} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
