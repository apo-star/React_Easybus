import mongoose, { Schema } from "mongoose";

const busSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true, "Bus name is required"],
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
      required: [true, "Departure Location is required"],
    },
    departureTime: {
      type: String,
      // required: [true, "Departure Time is required"],
    },
    arrivalTime: {
      type: String,
      // required: [true, "Departure Time is required"],
    },
    totalSeats: {
      type: Number,
      required: [true, "Total Seat is required"],
      default: 24,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    seats: [
      {
        seatNo: {
          type: String,
          required: [true, "SeatNo is required"],
        },
        seatAvailability: [
          {
            bookingDate: {
              type: String,
            },
            isBooked: {
              type: Boolean,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Bus", busSchema);
