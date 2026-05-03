const app = require("express")();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const cors = require("cors");
require("dotenv").config();

const Coin = require("./models/COIN/coin");
const Config = require("./models/config");
const Gallery = require("./models/gallery");
const User = require("./models/USER/user");
const Other = require("./models/OTHERS/others");
const OtherPrice = require("./models/OTHERS/othersPrice");
const View = require("./models/USER/view");
const Msg = require("./models/MSG/msg");
const CurrencyArchive = require("./models/ARCHIVE/currencyArch");
const OthersArchive = require("./models/ARCHIVE/othersArch");
const CoinArchive = require("./models/ARCHIVE/coinArch");
const Currency = require("./models/CURRENCY/currency");
const sequelize = require("./db.js");
const CoinPrice = require("./models/COIN/coinPrice");
const CurrencyPrice = require("./models/CURRENCY/currencyPrice");
const othersPrice = require("./models/OTHERS/othersPrice");
const Others = require("./models/OTHERS/others");
const News = require("./models/news");
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/forms", express.static(process.cwd() + "/forms"));
app.use("/rules", express.static(process.cwd() + "/rules"));
app.use("/exhub", express.static(process.cwd() + "/exhub"));
app.use("/NewsPhoto", express.static(process.cwd() + "/NewsPhoto"));

app.use("/api/uploadImage", express.static(path.join(__dirname, "images")));
app.use("/images", express.static(process.cwd() + "/images"));


const {
  initalCurrency,
  initialCoin,
  initialCoinPrice,
  initialCurrencyPrice,
  initialView,
  initialOthers,
  initialOthersPrice,
} = require("./initialDB.js");

const clientRoutes = require("./routes/client-routes");
const adminRoutes = require("./routes/admin-routes");
console.log("process.env.VERSION : ", process.env.VERSION);

app.use((req, res, next) => {
  console.log(
    process.env.VERSION,
    req.headers.appversion,
    req.headers.appversion != undefined
  );

  if (req.headers.appversion && req.headers.appversion != undefined) {
    if (req.headers.appversion == process.env.VERSION) {
      return next();
    } else {
      return res.status(403).json({ msg: "Exhub has been expired ..." });
    }
  }

  if (req.headers.appversion == undefined) {
    return next();
  }
});

app.use("/api", clientRoutes);
app.use("/api", adminRoutes);

CurrencyPrice.belongsTo(Currency);
othersPrice.belongsTo(Others);
CoinPrice.belongsTo(Coin);
CoinArchive.belongsTo(Coin);
CurrencyArchive.belongsTo(Currency);
OthersArchive.belongsTo(Others);

sequelize
  .sync()
  // .sync({ force: true })
  .then((result) => {
    const port = process.env.PORT || 4000;
    const server = app.listen(port, () => {
      console.log("Server is up on port " + port);
    });
    const io = require("./socket.js").init(server);

    io.on("connection", (socket) => {
      console.log("socket connected ...");
    });
  })
  .catch((err) => {
    // console.log(err);
  });

Msg.sync()
  .then(() => {})
  .catch((err) => {
    //   console.log(err);
  });

Currency.sync()
  .then(async () => {
    try {
      const finded = await Currency.findAll();
      if (finded.length == 0) {
        await initalCurrency();
      }
    } catch (Err) {
      // console.log(Err);
    }
  })
  .catch((err) => {
    //   console.log(err);
  });

Others.sync()
  .then(async () => {
    try {
      const finded = await Others.findAll();
      if (finded.length == 0) {
        await initialOthers();
      }
    } catch (Err) {
      // console.log(Err);
    }
  })
  .catch((err) => {
    //   console.log(err);
  });

Coin.sync()
  .then(async () => {
    try {
      const finded = await Coin.findAll();
      if (finded.length == 0) {
        await initialCoin();
      }
    } catch (Err) {
      //  console.log(Err);
    }
  })
  .catch((err) => {
    //  console.log(err);
  });

CoinPrice.sync()
  .then(async () => {
    try {
      const finded = await CoinPrice.findAll();
      if (finded.length == 0) {
        await initialCoinPrice();
      }
    } catch (Err) {
      // console.log(Err);
    }
  })
  .catch((err) => {
    //  console.log(err);
  });

othersPrice
  .sync()
  .then(async () => {
    try {
      const finded = await othersPrice.findAll();
      if (finded.length == 0) {
        await initialOthersPrice();
      }
    } catch (Err) {
      // console.log(Err);
    }
  })
  .catch((err) => {
    //  console.log(err);
  });

View.sync()
  .then(async () => {
    try {
      const finded = await View.findAll();
      if (finded.length == 0) {
        await initialView();
      }
    } catch (Err) {
      // console.log(Err);
    }
  })
  .catch((err) => {
    //  console.log(err);
  });

CurrencyPrice.sync()
  .then(async () => {
    try {
      const finded = await CurrencyPrice.findAll();
      if (finded.length == 0) {
        await initialCurrencyPrice();
      }
    } catch (err) {
      //  console.log(err);
    }
  })
  .catch((err) => {
    //  console.log(err);
  });
