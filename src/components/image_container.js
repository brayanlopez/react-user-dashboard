import React from "react";
import { Container } from "@mui/material";

export default function ImageContainer({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${process.env.REACT_APP_API_PICTURES})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </Container>
  );
}
