import express from "express";
import cors from "cors";
import user from "./routes/user";
import dbConnect from "./config/dbConnect";
import location from "./routes/location";
import bus from "./routes/bus";
import offerDeals from "./routes/offerDeals";
import stripe from "./routes/stripe";
import busRoute from "./routes/busRoute";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api/v1", user);
app.use("/api/v1", location);
app.use("/api/v1", bus);
app.use("/api/v1", offerDeals);
app.use("/api/v1", busRoute);

app.use("/api/v1", stripe);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected and listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
