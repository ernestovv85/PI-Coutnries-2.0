import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import indexRoutes from "./routes/index";

// Initializations
const app: Application = express();

// Settings
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(helmet());

// Routes
app.use("/", indexRoutes);

// this folders for this application will be used to store public file images
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
