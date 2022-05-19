import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../../pages/not_found";

describe("Screen prints at not found view", () => {
  const loginComponent = (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  test("should print resource not found", () => {
    render(loginComponent);
    const title = screen.getAllByText(/This resource is not found./i);
    expect(title[0]).toBeInTheDocument();
  });
  test("should print return to principal page", () => {
    render(loginComponent);
    const title = screen.getByText(/Return to principal page/i);
    expect(title).toBeInTheDocument();
  });
});
