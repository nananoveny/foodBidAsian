import loadable from "@loadable/component";

const routes = [
  {
    path: "*",
    element: loadable(() => import("../pages/Home/Home.jsx")),
  },
  {
    path: "/home",
    element: loadable(() => import("../pages/Home/Home.jsx")),
  },
  {
    path: "/discussions",
    element: loadable(() => import("../pages/Discussion/Discussion.jsx")),
  },
  {
    path: "/discussions/:postId",
    element: loadable(() => import("../pages/Discussion/DetailDiscussion.jsx")),
  },
  {
    path: "/vote",
    element: loadable(() => import("../pages/Poll/Poll.jsx")),
  },
  {
    path: "/signup",
    element: loadable(() => import("../pages/SignUp/SignUp.jsx")),
  },
  {
    path: "/login",
    element: loadable(() => import("../pages/Login/Login.jsx")),
  },
  {
    path: "/user-wall",
    element: loadable(() => import("../pages/UserWall/UserWall.jsx")),
  },
  {
    path: "/youth-forum",
    element: loadable(() => import("../pages/YouthForum/YouthForum.jsx")),
  },
  {
    path: "/foodbid",
    element: loadable(() => import("../pages/FoodBid/FoodBid.jsx")),
  },
  {
    path: "/foodbid/auction",
    element: loadable(() =>
      import("../pages/FoodBid/DefaultPost/DetailAuctionPost.jsx")
    ),
  },
  {
    path: "/foodbid/bidding",
    element: loadable(() =>
      import("../pages/FoodBid/DefaultPost/DetailBiddingPost.jsx")
    ),
  },
  {
    path: "/foodbid/bussiness-matching",
    element: loadable(() =>
      import("../pages/FoodBid/DefaultPost/DetailBussinessMatching.jsx")
    ),
  },
  {
    path: "/contact-us",
    element: loadable(() => import("../pages/ContactInfo/ContactInfo.jsx")),
  },
  {
    path: "/user-profile",
    element: loadable(() => import("../pages/UserProfile/UserProfile.jsx")),
  },
  {
    path: "/user-posts",
    element: loadable(() => import("../pages/UserPost/UserPost.jsx")),
  },
  {
    path: "/request-posts",
    element: loadable(() => import("../pages/RequestPost/RequestPost.jsx")),
  },
];

// const unauthorizedRoutes = [
//   {
//     path: "*",
//     element: loadable(() => import("pages/login")),
//   },
// ];

// const routes = (isLogin: boolean) =>
//   isLogin ? authorizedRoutes : unauthorizedRoutes;

export default routes;
