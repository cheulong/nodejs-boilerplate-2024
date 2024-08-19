import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./api/v1/routes/contactRoutes";
import errorHandler from "./api/v1/middlewares/errorHandler";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
