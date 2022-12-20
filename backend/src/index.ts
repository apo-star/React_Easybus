import express from "express";
import cors from "cors";
import user from "./routes/user";
import dbConnect from "./config/dbConnect";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api/v1", user);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected and listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
