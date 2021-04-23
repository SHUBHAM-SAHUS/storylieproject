// import Home from "components/HomepageLayout/Home";
import NewHome from "components/NewHomePage/NewHome";
import { PostDetails } from "components/PostDetailsLayout/PostDetails";
import { TopicDetails } from "components/TopicDetailsLayout/TopicDetails"


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
  {
    key: "topicdetailskey",
    path: "/topic-details",
    component: TopicDetails,
    exact: true,
  }

];

export const privateRoutes = [];
