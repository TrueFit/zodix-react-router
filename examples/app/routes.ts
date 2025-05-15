import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("search", "routes/search.tsx"),
  route("login", "routes/login.tsx"),
  route("posts/:postId", "routes/posts.tsx"),
] satisfies RouteConfig;
