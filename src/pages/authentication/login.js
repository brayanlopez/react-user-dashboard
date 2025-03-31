import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ImageContainer from "../../components/image_container";
import { useDispatch } from "react-redux";
import { login } from "../../redux-slices";
import { MAIN_ROUTE } from "../../App";

let email, password;
const Login = () => {
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (
      formData.get("email") === "admin" &&
      formData.get("password") === "12345"
    ) {
      dispatch(login());
      navigate(`${MAIN_ROUTE}/dashboard`);
    }
  };

  const validateFields = () => {
    if (email === undefined || password === undefined) {
      setIsLoginDisabled(true);
    } else if (email !== "" && password !== "") {
      setIsLoginDisabled(false);
    } else {
      setIsLoginDisabled(true);
    }
  };

  return (
    <ImageContainer>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            onChange={validateFields}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                email = e.target.value;
              }}
              error={email === ""}
              helperText={email === "" ? "Please write your email" : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                password = e.target.value;
              }}
              error={password === ""}
              helperText={password === "" ? "Please write your password" : ""}
            />
            <FormControlLabel
              name="remember"
              defaultValue={false}
              control={<Checkbox value={true} color="primary" />}
              label="Remember me"
            />
            <Button
              disabled={isLoginDisabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ImageContainer>
  );
};

export { Login };
