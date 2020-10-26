import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthRoutes } from "../views/Auth";
import PrivateRoute from "../PrivateRoutes";
import { DashboardRoutes } from "../views/Dashboard";
import { Navbar } from "../shared/layouts";
import { SummaryRoutes } from "../views/Summary";
import { SettingsRoutes } from "../views/Settings";

import { AboutRoutes } from "../views/About/config/AboutRoutes";
const ApplicationRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={DashboardRoutes} />
        <PrivateRoute exact path="/about" component={AboutRoutes} />
        <PrivateRoute exact path="/summary" component={SummaryRoutes} />
        <PrivateRoute exact path="/settings" component={SettingsRoutes} />

        <Route path="/auth" component={AuthRoutes} />
        <Redirect to="/auth" from="/" />
      </Switch>
    </Router>
  );
};
export default ApplicationRoutes;
