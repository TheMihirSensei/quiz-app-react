import Home from "@components/Home";
import React, { Component } from "react";
import { useRoutes } from "react-router-dom";
// import Home from "../components/Home";
// Home
function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      //   children: [
      //     {
      //       path: "messages",
      //       element: <DashboardMessages />,
      //     },
      //     { path: "tasks", element: <DashboardTasks /> },
      //   ],
    },
    // { path: "team", element: <AboutPage /> },
  ]);

  return element;
}

export default Routes;
