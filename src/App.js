import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/authentication/login";
import NotFound from "./pages/not_found";
// import Redux from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A020F0",
    },
  },
});

// const store = Redux.createStore((state = { login: false }) => state);

function App() {
  return (
    // <Provider>
    // {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/signup" element={<SignUp />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    // </Provider>
  );
}

export default App;
