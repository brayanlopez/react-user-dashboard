import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../../pages/authentication/login";

describe("Screen prints at login", () => {
  const loginComponent = (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
  test("should print Sign in", () => {
    render(loginComponent);
    const title = screen.getAllByText(/Sign in/i);
    expect(title[0]).toBeInTheDocument();
  });
  test("should print Remember me text", () => {
    render(loginComponent);
    const title = screen.getByText(/Remember me/i);
    expect(title).toBeInTheDocument();
  });
});
