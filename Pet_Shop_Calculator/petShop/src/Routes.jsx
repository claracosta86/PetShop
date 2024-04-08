import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage"
import ResultPage from "./pages/ResultPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "datapage",
      element: <DataPage />,
    },
    {
      path: "resultpage",
      element: <ResultPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
