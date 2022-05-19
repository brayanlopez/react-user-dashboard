import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Login } from "./pages/authentication/login";
import NotFound from "./pages/not_found";
import { theme } from "./config/theme";
import { useSelector } from "react-redux";

const App = () => {
  let app = useSelector((state) => state.app.isLogin);
  const replaceLogin = <Navigate to="/login" replace />;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={app ? <Dashboard /> : replaceLogin}
          />
          {/* <Route exact path="/signup" element={<SignUp />} /> */}
          <Route exact path="/" element={replaceLogin} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
