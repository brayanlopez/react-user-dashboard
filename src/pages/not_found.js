import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onclick = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        with: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        gap: 5,
      }}
    >
      <Typography variant="h1" color="initial" align="center">
        This resource is not found.
      </Typography>
      <Button variant="contained" onClick={onclick}>
        Return to principal page
      </Button>
    </Container>
  );
}
