import mongoose, { Schema } from "mongoose";

const busRouteSchema = new Schema(
  {
    image: {
      type: String,
      required: [true, "Image is Required"],
    },
    startPoint: {
      type: String,
      required: [true, "StartPoint is Required"],
    },
    destPoint: {
      type: String,
      required: [true, "Destination Point is Required"],
    },
    fair: {
      label: {
        type: String,
        required: [true, "Label is required"],
      },
      currencySign: {
        type: String,
        required: [true, "Currency Sign is required"],
      },
      amount: {
        type: String,
        required: [true, "Amount is required"],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("BusRoute", busRouteSchema);
