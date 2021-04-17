import Home from "components/Home";

//private routes

export const publicRoutes = [
  {
    key: "home",
    path: "/",
    component: Home,
    exact: true,
  },
];

export const privateRoutes = [];
