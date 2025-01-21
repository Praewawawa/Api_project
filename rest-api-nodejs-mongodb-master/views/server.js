const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require('./routes/userRoutes');
// const createIndexes = require('./src/config/setupIndexes'); // นำเข้าไฟล์การสร้าง index

dotenv.config();

const app = express();

// เชื่อมต่อกับฐานข้อมูล
connectDB()
  .then(async () => {
    // สร้าง index

    app.use(morgan("dev"));
    app.use(express.json());

    app.use("/api", require("./routes/userRoutes")); // ตรวจสอบเส้นทางไฟล์ //
    app.use("/api", require("./routes/robotRoutes"));
    // Routes
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // แก้ไขข้อความ log
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });