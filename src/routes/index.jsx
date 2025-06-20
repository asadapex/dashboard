import React from "react";
import { Route, Routes } from "react-router-dom";
import { pageRoueteList } from "../hooks/paths";

const PageRoutes = () => {
  return (
    <Routes>
      {pageRoueteList.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default PageRoutes;
