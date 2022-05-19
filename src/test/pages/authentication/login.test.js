import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Login } from "../../../pages/authentication/login";
import { Provider } from "react-redux";
import store from "../../../config/store";

describe("Screen prints at login", () => {
  const loginComponent = (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Login />
      </MemoryRouter>
    </Provider>
  );
  test("should print Sign in", () => {
    render(loginComponent);
    const title = screen.getAllByText(/Sign in/i);
    expect(title[0]).toBeInTheDocument;
  });
  test("should print Remember me text", () => {
    render(loginComponent);
    const title = screen.getByText(/Remember me/i);
    expect(title).toBeInTheDocument;
  });
});
