import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import employeeRoutes from "./Routes/employeeRoute.js"; 
import serviceRoutes from "./Routes/serviceRoute.js";
import scheduleRoutes from "./Routes/scheduleRoute.js";
import paymentRoutes from "./Routes/paymentRoute.js";
import invoiceRoutes from "./Routes/invoiceRoute.js";
import vendorRoutes from "./Routes/vendorRoute.js";
import venueRoutes from "./Routes/venueRoute.js";
import bookingRoutes from "./Routes/bookingRoute.js";
import clientRoutes from "./Routes/clientRoute.js";
import eventRoutes from "./Routes/eventRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", employeeRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/venues", venueRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/events", eventRoutes);

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.get('/', (req, res) => {
  res.send('Hello World!');
});
