import React from "react";
import { Navigate } from "react-router-dom";

//懒加载
const Home = React.lazy(() => import('@/views/Home'));
const Detail = React.lazy(() => import('@/views/Detail'));
const Entire = React.lazy(() => import('@/views/Entire'));

const route = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/detail",
    element: <Detail/>
  },
  {
    path: "/entire",
    element: <Entire/>
  }
];

export default route;
