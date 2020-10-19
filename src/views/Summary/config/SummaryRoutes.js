import React from "react";
import { Route, Switch } from "react-router-dom";
import Summary from "../components/Summary";
export const SummaryRoutes = () => {
  return (
    <Switch>
      <Route exact path="/summary" component={Summary} />
    </Switch>
  );
};
