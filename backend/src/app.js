import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    student: process.env.STUDENT_ID || "OGRENCI_NO_YOK"
  });
});

app.use("/events", eventRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ error: { message: "Route not found" } });
});

export default app;
