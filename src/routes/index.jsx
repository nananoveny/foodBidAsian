import { Routes, Route } from "react-router-dom";

import routes from "./routes";

const Router = () => {
  //   const isLogin = useAuthenticate((state) => state.isLogin);
  //   console.log(isLogin);

  return (
    <Routes>
      {routes?.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element.render()}
        />
      ))}
    </Routes>
  );
};

export default Router;
