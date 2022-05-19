import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import NotFound from "../../pages/not_found";

describe("Screen prints at not found view", () => {
  const loginComponent = (
    <MemoryRouter initialEntries={["/"]}>
      {/* <Route exact path="/" element={} /> */}
      <NotFound />
    </MemoryRouter>
  );
  test("should print resource not found", () => {
    render(loginComponent);
    const title = screen.getByText(/This resource is not found./i);
    expect(title).toBeInTheDocument;
  });
  test("should print return to principal page", () => {
    render(loginComponent);
    const title = screen.getByText(/Return to principal page/i);
    expect(title).toBeInTheDocument;
  });
});
