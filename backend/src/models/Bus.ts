import mongoose, { Schema } from "mongoose";

const busSchema = new Schema({
  name: {
    type: String,
    required: [true, "Bus name is required"],
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
    required: [true, "Departure Time is required"],
  },
  arrivalTime: {
    type: String,
    required: [true, "Departure Time is required"],
  },
  totalSeats: {
    type: Number,
    required: [true, "Total Seat is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  seats: [],
});

export default mongoose.model("Bus", busSchema);
