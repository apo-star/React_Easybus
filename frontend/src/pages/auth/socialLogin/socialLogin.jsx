import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import { Stack } from "@mui/system";

import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AuthContext } from "../../../context/AuthProvider";

const SocialLogin = ({ setOpen }) => {
  const { userGoogleSignIn, userFacebookSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  // google sign in
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((res) => {
        setOpen(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  // facebook sign in
  const handleFacebookSignIn = () => {
    userFacebookSignIn()
      .then((res) => {
        setOpen(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <Stack direction="row" spacing={2} marginY={2}>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        fullWidth
        sx={{
          fontWeight: "bold",
          backgroundColor: "#34A853",
          color: "#fff",
          borderRadius: "7px",
          textTransform: "inherit",
          boxShadow: "none",
          border: "1px solid transparent",
          ":hover": {
            backgroundColor: "transparent",
            color: "#34A853",
            boxShadow: "none",
            border: "1px solid #34A853",
          },
        }}
        onClick={handleGoogleSignIn}
      >
        Google
      </Button>
      <Button
        variant="contained"
        startIcon={<FacebookIcon />}
        fullWidth
        sx={{
          fontWeight: "bold",
          backgroundColor: "#0165E1",
          color: "#fff",
          borderRadius: "7px",
          textTransform: "inherit",
          boxShadow: "none",
          border: "1px solid transparent",
          ":hover": {
            backgroundColor: "transparent",
            color: "#0165E1",
            boxShadow: "none",
            border: "1px solid #0165E1",
          },
        }}
        onClick={handleFacebookSignIn}
      >
        Facebook
      </Button>
    </Stack>
  );
};

export default SocialLogin;
