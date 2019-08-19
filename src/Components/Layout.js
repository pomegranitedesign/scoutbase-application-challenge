import React, { Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Header from "./Header";
import Footer from "./Footer";

// Apollo Client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <Header />
        <div style={{ marginTop: "100px" }}>{children}</div>
        <Footer />
      </ApolloProvider>
    </Fragment>
  );
};

export default Layout;
