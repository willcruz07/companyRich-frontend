import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Main } from "../pages/Main";

export const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/main" component={Main} />
      <Redirect from="*" to="/main" />
    </Switch>
  );
};
