import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import { Main, Countries, Country } from "./Pages";

const Routes = _ => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          exact
          path="/countries"
          render={props => <Countries routerProps={props} />}
        />
        <Route exact path="/countries/:code" component={Country} />
      </Switch>
    </Layout>
  );
};

export default Routes;
