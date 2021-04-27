import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../pages/SignIn";

export const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Redirect from="*" to="/signin" />
    </Switch>
  );
};
