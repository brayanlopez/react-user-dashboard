import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      This resource is not found.
      <Link to={"/"}>Return to the principal menu</Link>
    </div>
  );
}
