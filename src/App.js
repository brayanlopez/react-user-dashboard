import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material";

import Dashboard from "./pages/dashboard";
import { Login } from "./pages/authentication/login";
import NotFound from "./pages/not_found";
import { theme } from "./config/theme";

export const MAIN_ROUTE = "/react-user-dashboard";

const App = () => {
  const app = useSelector((state) => state.app.isLogin);
  const replaceLogin = <Navigate to={`${MAIN_ROUTE}/login`} replace />;

  const routes = [
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: app ? <Dashboard /> : replaceLogin },
    { path: "/", element: replaceLogin },
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {routes.map((item) => (
            <Route exact path={MAIN_ROUTE + item.path} element={item.element} />
          ))}
          {/* <Route exact path="/signup" element={<SignUp />} /> */}
          <Route exact path={MAIN_ROUTE} element={replaceLogin} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
