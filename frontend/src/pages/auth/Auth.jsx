import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { Chip, Divider } from "@mui/material";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import SocialLogin from "./socialLogin/socialLogin";

const Auth = ({ setOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { userLogin, createUser, userProfileUpdate } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { name, mail, password } = data;
    const userProfile = { displayName: name };
    // creating user
    if (!isLogin) {
      createUser(mail, password)
        .then((res) => {
          userProfileUpdate(userProfile);
          toast.success("Account Successfully Created");
          setOpen(false);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.code.split("/")[1].split("-").join(" "));
        });
    } else {
      // login user
      userLogin(mail, password)
        .then((res) => {
          toast.success("Login Successfully");
          setOpen(false);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.code.split("/")[1].split("-").join(" "));
        });
    }
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {!isLogin ? "Create Account" : "Good to see you again"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {!isLogin && (
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  size="small"
                  name="name"
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <Typography
                    role="alert"
                    paddingTop={1}
                    fontSize={13}
                    color={"tomato"}
                  >
                    Your name is required
                  </Typography>
                )}
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  fontSize: "12px",
                }}
                {...register("mail", {
                  required: "Email Address is required",
                  validate: {
                    emailValidation: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) === true,
                  },
                })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail?.message && (
                <Typography
                  role="alert"
                  paddingTop={1}
                  fontSize={13}
                  color={"tomato"}
                >
                  {errors.mail?.message}
                </Typography>
              )}
              {errors.mail && errors.mail.type === "emailValidation" && (
                <Typography paddingTop={1} fontSize={13} color={"tomato"}>
                  Your email address is invalid
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    graterThanSeven: (value) => value.length >= 6,
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.message && (
                <Typography
                  role="alert"
                  paddingTop={1}
                  fontSize={13}
                  color={"tomato"}
                >
                  {errors.password?.message}
                </Typography>
              )}
              {errors.password &&
                !isLogin &&
                errors.password.type === "graterThanSeven" && (
                  <Typography paddingTop={1} fontSize={13} color={"tomato"}>
                    Your password should have 6 character
                  </Typography>
                )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
              backgroundColor: "primary.main",
              color: "#fff",
              borderRadius: "7px",
              textTransform: "inherit",
              boxShadow: "none",
              border: "1px solid transparent",
              ":hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                boxShadow: "none",
                border: "1px solid #FFA903",
              },
              marginY: "1rem",
            }}
          >
            {!isLogin ? "Create Account" : "Login"}
          </Button>
          <Divider>
            <Chip
              label="or continue with"
              sx={{ backgroundColor: "transparent", border: "1px solid #ccc" }}
            />
          </Divider>

          <SocialLogin setOpen={setOpen} />
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item>
              {!isLogin ? (
                <Typography fontSize={14}>
                  Already have an account?{" "}
                  <Typography
                    display={"inline-block"}
                    color={"secondary.main"}
                    sx={{
                      cursor: "pointer",
                      transition: "all 0.3s",
                      ":hover": {
                        color: "primary.main",
                        transition: "all 0.3s",
                      },
                    }}
                    onClick={() => setIsLogin(true)}
                    variant="body2"
                  >
                    Login
                  </Typography>
                </Typography>
              ) : (
                <Typography fontSize={14}>
                  You don't have any Easy Bus account?{" "}
                  <Typography
                    display={"inline-block"}
                    color={"secondary.main"}
                    sx={{
                      cursor: "pointer",
                      transition: "all 0.3s",
                      ":hover": {
                        color: "primary.main",
                        transition: "all 0.3s",
                      },
                    }}
                    onClick={() => setIsLogin(false)}
                    variant="body2"
                  >
                    Create One
                  </Typography>
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
