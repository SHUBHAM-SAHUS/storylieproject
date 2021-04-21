// import Home from "components/HomepageLayout/Home";
import NewHome from "components/NewHomePage/NewHome";
import { PostDetails } from "components/PostDetailsLayout/PostDetails";


//private routes

export const publicRoutes = [
  // {
  //   key: "home",
  //   path: "/",
  //   component: Home,
  //   exact: true,
  // },
  {
    key: "newhome",
    path: "/",
    component: NewHome,
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
