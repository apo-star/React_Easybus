import React, { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./TicketPayment.css";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import { AuthContext } from "../../context/AuthProvider";

const TicketPayment = () => {
  const { bookedseats, bookedBus, journeyDate } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const ticketPrice = 100;

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  // stripe card element
  const stripe = useStripe();
  const elements = useElements();

  // payment intents state
  const [clientSecret, setClientSecret] = useState("");

  // payment confirm traxnId state
  const [transectionId, setTransectionId] = useState("");

  const onSubmit = async (orderedItem) => {
    // getting stripe card data
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
      return;
    } else {
    }
    // confirm stripe card payment
    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          // billing_details: {
          //   name: "demo",
          //   email: "demo@gmail.com",
          //   ticketId: "demooo123",
          // },
        },
      }
    );

    if (confirmError) {
      toast.error(confirmError);
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransectionId(paymentIntent?.id);

      // send payment details on database
      const paymentInfo = {
        userName: user.name,
        userEmail: user.email,
        fare: bookedBus.fare,
        departureLocation: bookedBus.departureLocation,
        arrivalLocation: bookedBus.arrivalLocation,
        date: journeyDate,
        seatId: bookedseats,
        transectionId: paymentIntent?.id,
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/booking/new",
        paymentInfo
      );
      if (data.acknowledged) {
        toast.success("Payment Successful");
      }
    }
    reset();
  };
  // stripe payment intents
  useEffect(() => {
    if (ticketPrice === 0) {
      return;
    }
    fetch("http://localhost:5000/api/v1/stripeapi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseInt(ticketPrice) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.data);
      });
  }, [ticketPrice]);
  return (
    <div>
      <Box
        width={"50%"}
        marginX={"auto"}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <Stack spacing={8} mx={"auto"} py={12} px={6}>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <Box>
                  <TextField
                    autoComplete="name"
                    size="small"
                    name="name"
                    fullWidth
                    id="routename"
                    label="Route Name"
                    autoFocus
                    {...register("routename", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    defaultValue={`${bookedBus.arrivalLocation} - ${bookedBus.departureLocation}`}
                  />
                </Box>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Amount
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      size="small"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Amount"
                      defaultValue={bookedBus.fare}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Stack direction={["column", "row"]}>
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
                      defaultValue={user?.displayName}
                    />
                  </Stack>
                </Box>
                <Box>
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
                    defaultValue={user?.email}
                  />
                </Box>
                <FormControl>
                  <CardElement
                    className="p-3"
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#B3C5EF",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
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
                  disabled={transectionId}
                  isLoading={isSubmitting}
                >
                  {transectionId ? (
                    "Payment Successful"
                  ) : (
                    <>Pay ${ticketPrice}</>
                  )}
                </Button>
              </Stack>
            </Box>
            <Box
              background={"green.700"}
              borderRadius={7}
              fontWeight="semibold"
              textAlign={"center"}
              marginTop={0}
            >
              {transectionId ? (
                <Typography>
                  <Typography color={"gray.800"} display={"inline-block"}>
                    Your TxN No:
                  </Typography>{" "}
                  {transectionId}
                </Typography>
              ) : (
                <Typography>
                  <Typography color={"gray.800"} display={"inline-block"}>
                    Test Card No:
                  </Typography>{" "}
                  378282246310005
                </Typography>
              )}
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default TicketPayment;
