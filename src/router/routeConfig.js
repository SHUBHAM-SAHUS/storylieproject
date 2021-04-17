import Home from "components/HomepageLayout/Home";

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
