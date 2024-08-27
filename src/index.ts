import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./api/v1/routes/contactRoutes";
import userRoutes from "./api/v1/routes/userRoutes";
import errorHandler from "./api/v1/middlewares/errorHandler";
import connectMongoDb from "./config/databaseConfig";
import logger from "./config/logger";
import morgan from "morgan";
import { swaggerSetup } from "./config/swagger";
import { db } from "./config/drizzle/db";
import { UserTable } from "./config/drizzle/drizzle.schema";
// import supabase from "./config/supabase";

const morganFormat = ":method :url :status :response-time ms";

dotenv.config();
connectMongoDb();
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
swaggerSetup(app);
app.get("/", async (req, res) => {
  // await db.insert(UserTable).values({ name: "John Do" });
  const users = await db.query.UserTable.findMany();
  res.send(users);
});

export default app;
