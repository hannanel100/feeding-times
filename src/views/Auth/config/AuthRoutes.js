import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { SignUp, Login } from "../components";
export const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={SignUp} />
      <Redirect to="/auth/login" from="/auth" />
    </Switch>
  );
};
