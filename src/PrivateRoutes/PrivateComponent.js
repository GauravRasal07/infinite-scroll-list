import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "../App";

export const PrivateComponent = (props) => {
  const { component: Component, ...rest } = props;

  const mainContext = useContext(MainContext);
  const { isLoggedIn } = mainContext;
  return isLoggedIn ? <Component /> : <Navigate to="/" />;
};
