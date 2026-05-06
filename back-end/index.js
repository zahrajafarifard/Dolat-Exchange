"use strict";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const sequelize = require("./db.js");

// Models
const Coin = require("./models/COIN/coin");
const CoinPrice = require("./models/COIN/coinPrice");
const CoinArchive = require("./models/ARCHIVE/coinArch");

const Currency = require("./models/CURRENCY/currency");
const CurrencyPrice = require("./models/CURRENCY/currencyPrice");
const CurrencyArchive = require("./models/ARCHIVE/currencyArch");

const Config = require("./models/config");
const Gallery = require("./models/gallery");
const User = require("./models/USER/user");
const View = require("./models/USER/view");
const News = require("./models/news");

// Routes
const clientRoutes = require("./routes/client-routes");
const adminRoutes = require("./routes/admin-routes");

// -------------------- MIDDLEWARE --------------------
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  }),
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/forms", express.static(process.cwd() + "/forms"));
app.use("/rules", express.static(process.cwd() + "/rules"));
app.use("/exhub", express.static(process.cwd() + "/exhub"));
app.use("/NewsPhoto", express.static(process.cwd() + "/NewsPhoto"));
app.use("/images", express.static(process.cwd() + "/images"));
app.use("/api/uploadImage", express.static(path.join(__dirname, "images")));

// -------------------- ASSOCIATIONS --------------------
function initAssociations() {
  CoinPrice.belongsTo(Coin);
  CoinArchive.belongsTo(Coin);

  CurrencyPrice.belongsTo(Currency);
  CurrencyArchive.belongsTo(Currency);
}

initAssociations();

// -------------------- ROUTES --------------------
app.use("/api", clientRoutes);
app.use("/api", adminRoutes);

// -------------------- START SERVER --------------------
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");

    const server = app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });

    const io = require("./socket.js").init(server);

    io.on("connection", (socket) => {
      console.log("Socket connected");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
