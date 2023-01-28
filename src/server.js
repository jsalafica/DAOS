import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", routes);

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://javidav:1384javi@cluster0.kzyoxh1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  });
