import Home from "components/HomepageLayout/Home";
import { PostDetails } from "components/PostDetailsLayout/PostDetails";


//private routes

export const publicRoutes = [
  {
    key: "home",
    path: "/",
    component: Home,
    exact: true,
  },

  {
    key: "postdetailskey",
    path: "/post-details",
    component: PostDetails,
    exact: true,
  },

];

export const privateRoutes = [];
