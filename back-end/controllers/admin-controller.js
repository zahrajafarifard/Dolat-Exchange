const Coin = require("../models/COIN/coin");
const Config = require("../models/config");
const Gallery = require("../models/gallery");
const CurrencyArchive = require("../models/ARCHIVE/currencyArch");
const CoinArchive = require("../models/ARCHIVE/coinArch");
const Currency = require("../models/CURRENCY/currency");
const CoinPrice = require("../models/COIN/coinPrice");
const CurrencyPrice = require("../models/CURRENCY/currencyPrice");

const Notification = require("../models/Notifications/notification");
const News = require("../models/news");
const fs = require("fs");
const path = require("path");
const io = require("../socket");

exports.registerNews = async (req, res) => {
  const file = req.files[0];

  if (req.headers.secretkey !== process.env.SECRET_KEY) {
    return res.status(500).json({ err: " req is not valid" });
  }

  try {
    const { title, content } = req.body;
    await News.create({
      title,
      content,
      image: file.path,
    });

    // io.getio().emit("notification", notif);

    return res.status(201).send({ msg: "successfuly" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "invalid request" });
  }
};

exports.deleteImage = async (req, res) => {
  let _id = +req.body.id;
  let selecedItem;
  try {
    // console.log(req.body.id);
    selecedItem = await Gallery.findOne({
      where: {
        id: _id,
      },
    });

    selecedItemWithSameNames = await Gallery.findAll({
      where: {
        images: selecedItem.images,
      },
    });
    selecedItemWithSameNames.map(async (item) => {
      await item.destroy();
    });

    await selecedItem.destroy();

    let filePath = path.join(
      __dirname,
      "..",
      "images",
      selecedItem.images.split("\\")[1],
    );

    fs.unlink(filePath, (err) => {
      if (err) {
        throw err;
      }
      console.log("File is deleted.");
    });

    return res.status(200).json({ msg: "record is deleted..." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "record is not deleted..." });
  }
};
exports.getImageName = async (req, res) => {
  // console.log("rrrrr");
  let finded;
  try {
    finded = await Gallery.findAll({});
    // console.log(finded);
    return res.status(200).json({ data: finded });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ data: finded });
  }
};
exports.uploadImage = async (req, res) => {
  try {
    const files = req.files;
    files.map(async (img) => {
      console.log(img.path);

      await Gallery.create({
        images: img.path,
      });
    });
    return res.status(200).json({ message: "File was uploaded successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed File uploading" });
  }
};

exports.registerConfig = async (req, res) => {
  console.log(req.body);
  const {
    address,
    telegram,
    phone,
    email,
    whatsApp,
    fax,
    instagram,
    workHours,
    aboutUs,
  } = req.body;

  let finded;
  try {
    finded = await Config.findOne();
    if (!finded) {
      await Config.create({
        address,
        telegram,
        phone,
        email,
        fax,
        whatsApp,
        instagram,
        workHours,
        aboutUs,
      });
    } else {
      await Config.update(
        {
          address,
          telegram,
          phone,
          email,
          fax,
          whatsApp,
          instagram,
          workHours,
          aboutUs,
        },
        {
          where: {
            id: 1,
          },
        },
      );
    }
    return res.status(200).json({ msg: "registered successfully ..." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "registered failed ..." });
  }
};
exports.getConfig = async (req, res) => {
  let finded;
  try {
    finded = await Config.findOne({
      where: {
        id: 1,
      },
    });
    return res.status(200).send(finded);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "failed fetching data ..." });
  }
};

exports.setNotification = async (req, res) => {
  if (req.body.secretKey == process.env.SECRET_KEY) {
    try {
      const { notification } = req.body;
      await Notification.create({
        notification: notification,
      });

      const notif = await Notification.findOne({
        order: [["createdAt", "DESC"]],
      });
      io.getio().emit("notification", notif);

      res.status(200).send({ msg: "successfuly" });
    } catch (err) {
      console.log(err);
      res.send({ msg: "invalid request" }).status(422);
    }
  } else {
    res.status(500).send({ mes: "invalid request " });
  }
};

const archiveCoins = async (coin) => {
  try {
    await CoinArchive.create({
      buyPrice: coin.buyPrice,
      sellPrice: coin.sellPrice,
      CoinId: coin.id,
    });
  } catch (err) {
    console.log(err);
  }
};

const archiveCurrencies = async (currency) => {
  try {
    await CurrencyArchive.create({
      buyPrice: currency.buyPrice,
      sellPrice: currency.sellPrice,
      CurrencyId: currency.id,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateCurrency = async (req, res) => {
  if (req.headers.secretkey !== process.env.SECRET_KEY) {
    return res.status(500).json({ err: " req is not valid" });
  }

  let findedCurr;

  let _pBuyPrice;
  let _pSellPrice;
  const body = req.body;

  try {
    for (const currentElement of body) {
      findedCurr = await CurrencyPrice.findOne({
        where: {
          id: currentElement.id,
        },
      });

      if (
        +String(currentElement.buyPrice).replace(/,/g, "") ===
          findedCurr.buyPrice &&
        +String(currentElement.sellPrice).replace(/,/g, "") ===
          findedCurr.sellPrice
      ) {
        console.log("===");
      } else {
        _pBuyPrice = findedCurr.buyPrice;
        _pSellPrice = findedCurr.sellPrice;
        findedCurr.buyPrice = +String(currentElement.buyPrice).replace(
          /,/g,
          "",
        );
        findedCurr.sellPrice = +String(currentElement.sellPrice).replace(
          /,/g,
          "",
        );
        findedCurr.pBuyPrice = _pBuyPrice;
        findedCurr.pSellPrice = _pSellPrice;
        await findedCurr.save();

        await archiveCurrencies(findedCurr);
      }
    }
    const allCurrencies = await CurrencyPrice.findAll({
      include: { model: Currency },
      through: {
        attributes: ["name", "symbol"],
      },
    });
    io.getio().emit("getCurrencies", allCurrencies);
    res.send({ msg: "successfuly" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "server problem" });
  }
};

exports.updateCoin = async (req, res) => {
  if (req.headers.secretkey !== process.env.SECRET_KEY) {
    return res.status(500).json({ err: " req is not valid" });
  }
  let findedCoin;
  let _pBuyPrice;
  let _pSellPrice;
  const body = req.body;
  try {
    for (const currentElement of body) {
      if (currentElement.id) {
        findedCoin = await CoinPrice.findOne({
          where: {
            id: currentElement.id,
          },
        });

        if (
          +String(currentElement.buyPrice).replace(/,/g, "") ===
            findedCoin.buyPrice &&
          +String(currentElement.sellPrice).replace(/,/g, "") ===
            findedCoin.sellPrice
        ) {
          console.log("===");
        } else {
          _pBuyPrice = findedCoin.buyPrice;
          _pSellPrice = findedCoin.sellPrice;
          findedCoin.buyPrice = +String(currentElement.buyPrice).replace(
            /,/g,
            "",
          );
          findedCoin.sellPrice = +String(currentElement.sellPrice).replace(
            /,/g,
            "",
          );
          findedCoin.pBuyPrice = _pBuyPrice;
          findedCoin.pSellPrice = _pSellPrice;
          await findedCoin.save();
          await archiveCoins(findedCoin);
        }
      }
    }

    const allCoins = await CoinPrice.findAll({
      include: { model: Coin },
      through: {
        attributes: ["name", "symbol"],
      },
    });
    io.getio().emit("getCoins", allCoins);
    res.send({ msg: "successfuly" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server problem" });
  }
};





