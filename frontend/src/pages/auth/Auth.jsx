import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    console.log(data);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {!isLogin ? "Sign up" : "Login"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {!isLogin && (
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
              backgroundColor: "secondary.main",
              color: "#fff",
              borderRadius: "7px",
              textTransform: "inherit",
              boxShadow: "none",
              border: "1px solid transparent",
              ":hover": {
                backgroundColor: "transparent",
                color: "secondary.main",
                boxShadow: "none",
                border: "1px solid #6F66F8",
              },
              marginY: "1rem",
            }}
          >
            {!isLogin ? "Sign up" : "Login"}
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              {!isLogin ? (
                <Typography>
                  Already have an account?
                  <Link onClick={() => setIsLogin(true)} variant="body2">
                    Sign in
                  </Link>
                </Typography>
              ) : (
                <Typography>
                  You don't have Easy Bus account?
                  <Link onClick={() => setIsLogin(false)} variant="body2">
                    Create One
                  </Link>
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
