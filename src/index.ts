import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./api/v1/routes/contactRoutes";
import userRoutes from "./api/v1/routes/userRoutes";
import errorHandler from "./api/v1/middlewares/errorHandler";
import connectDb from "./config/databaseConfig";
import logger from "./config/logger";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

dotenv.config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
