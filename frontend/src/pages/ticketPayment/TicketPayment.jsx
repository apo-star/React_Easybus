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
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import useDocTitle from "../../hooks/useDocTitle";

const TicketPayment = () => {
  useDocTitle("Payment");
  const { bookedseats, bookedBus, journeyDate } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (!bookedBus) {
    return navigate("/search-bus");
  }
  const ticketPrice = bookedBus.fare * bookedseats.length;
  // const bookSeat = bookedBus.seats.filter((each) => each.tempBooked === true);
  // const seatNos = [];
  // bookSeat.map((each) => {
  //   seatNos.push(each.seatNo);
  // });
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  // stripe card element
  const stripe = useStripe();
  const elements = useElements();

  // payment intents state
  const [clientSecret, setClientSecret] = useState("");

  // payment confirm traxnId state
  const [transectionId, setTransectionId] = useState("");

  const onSubmit = async (customer, e) => {
    // getting stripe card data
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
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
          billing_details: {
            name: customer?.name,
            email: customer?.email,
            route: customer?.routeName,
          },
        },
      }
    );

    console.log(paymentIntent);

    if (confirmError) {
      console.log(confirmError);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransectionId(paymentIntent?.id);
      // send order on database
      const paymentInfo = {
        userName: user.displayName,
        userEmail: user.email,
        fare: bookedBus.fare,
        departureLocation: bookedBus.departureLocation,
        arrivalLocation: bookedBus.arrivalLocation,
        date: journeyDate,
        seatNo: bookedseats,
        busId: bookedBus._id,
        transactionId: paymentIntent?.id,
      };
      fetch("https://easybus-backend.vercel.app/api/v1/booking/new", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          queryClient.invalidateQueries(["buses"]);
          data.success && toast.success(`Bus Booked SuccessFully`);
          navigate("/my-bookings");
        });
    }
  };
  // stripe payment intents
  useEffect(() => {
    if (ticketPrice === 0) {
      return;
    }
    fetch("https://easybus-backend.vercel.app/api/v1/stripeapi", {
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
                    inputProps={{ readOnly: true }}
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
                      defaultValue={ticketPrice}
                      inputProps={{ readOnly: true }}
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
                      inputProps={{ readOnly: true }}
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
                    inputProps={{ readOnly: true }}
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
