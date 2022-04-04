import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import HomeLoader from "./Loader screen/HomeLoader";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <HomeLoader />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
