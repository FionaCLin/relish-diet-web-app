import React from "react";
import { Route } from "react-router-dom";

const renderMergedProps = (component, ...rest) => {
  const finalProps = { ...rest };
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

export default PropsRoute;
