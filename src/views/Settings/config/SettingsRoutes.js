import React from "react";
import { Route, Switch } from "react-router-dom";
import Settings from "../components/Settings";
export const SettingsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};
