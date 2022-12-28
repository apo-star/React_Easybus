import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name is required"],
    },
    userEmail: {
      type: String,
      required: [true, "User Email is required"],
    },
    fare: {
      type: Number,
      required: [true, "Fare is required"],
    },
    departureLocation: {
      type: String,
      required: [true, "Departure Location is required"],
    },
    arrivalLocation: {
      type: String,
      required: [true, "Arrival Location is required"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["paid", "cancelled"],
      default: "paid",
    },
    transactionId: {
      type: String,
      required: [true, "Transaction Id is Required"],
    },
    busId: {
      type: String,
      required: [true, "Bus Id is Required"],
    },
    seatId: {
      type: String,
      required: [true, "Seat Id is Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
