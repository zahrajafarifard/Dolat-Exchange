const { Op, Sequelize } = require("sequelize");

const Msg = require("../models/MSG/msg");
const CurrencyArchive = require("../models/ARCHIVE/currencyArch");
const OthersArchive = require("../models/ARCHIVE/othersArch");
const CoinArchive = require("../models/ARCHIVE/coinArch");
const Currency = require("../models/CURRENCY/currency");
const CoinPrice = require("../models/COIN/coinPrice");
const Coin = require("../models/COIN/coin");
const Gallery = require("../models/gallery");
const CurrencyPrice = require("../models/CURRENCY/currencyPrice");
const othersPrice = require("../models/OTHERS/othersPrice");
const Others = require("../models/OTHERS/others");
const Notification = require("../models/Notifications/notification");
const View = require("../models/USER/view");
const moment = require("moment");
const News = require("../models/news");

exports.downloadMonetaryRulesPDF = async (req, res) => {
  let resolve = require("path").resolve;
  return res.status(200).sendFile(resolve("./rules/monetary-rules.pdf"));
};
exports.downloadLawAgainstMoneyPDF = async (req, res) => {
  let resolve = require("path").resolve;
  return res.status(200).sendFile(resolve("./rules/law.pdf"));
};
exports.downloadImportsPDF = async (req, res) => {
  let resolve = require("path").resolve;
  return res.status(200).sendFile(resolve("./rules/imports.pdf"));
};

exports.commitmentLetter = async (req, res) => {
  let resolve = require("path").resolve;
  return res.status(200).sendFile(resolve("./forms/commitment.pdf"));
};

exports.realClientForm = async (req, res) => {
  let resolve = require("path").resolve;
  return res.status(200).sendFile(resolve("./forms/realForm.pdf"));
};

exports.legalClientForm = async (req, res) => {
  let resolve = require("path").resolve;
  return res.status(200).sendFile(resolve("./forms/legalForm.pdf"));
};

exports.getImages = async (req, res) => {
  const todayVisitors = await View.findOne({
    where: {
      [Op.and]: [
        Sequelize.where(
          Sequelize.fn("DAY", Sequelize.col("createdAt")),
          moment().format("DD")
        ),
        Sequelize.where(
          Sequelize.fn("MONTH", Sequelize.col("createdAt")),
          moment().format("MM")
        ),
        Sequelize.where(
          Sequelize.fn("YEAR", Sequelize.col("createdAt")),
          moment().format("YYYY")
        ),
      ],
    },
  });

  const yesterdayVisitors = await View.findAll({
    where: {
      [Op.and]: [
        Sequelize.where(
          Sequelize.fn("DAY", Sequelize.col("createdAt")),
          moment().subtract(1, "days").format("DD")
        ),
        Sequelize.where(
          Sequelize.fn("MONTH", Sequelize.col("createdAt")),
          moment().subtract(1, "days").format("MM")
        ),
        Sequelize.where(
          Sequelize.fn("YEAR", Sequelize.col("createdAt")),
          moment().subtract(1, "days").format("YYYY")
        ),
      ],
    },
    attributes: [[Sequelize.fn("sum", Sequelize.col("count")), "count"]],
  });

  let todayCountVal;
  let yesterdayCountVal;
  if (yesterdayVisitors != null) {
    yesterdayCountVal = yesterdayVisitors[0].dataValues.count;
  }

  if (todayVisitors == null) {
    const createdVisior = new View({
      count: 1,
    });
    createdVisior.save();
  } else {
    todayVisitors.count += 1;
    await todayVisitors.save();
    todayCountVal = todayVisitors.count;
  }

  const totalCount = await View.findAll({
    attributes: [[Sequelize.fn("sum", Sequelize.col("count")), "count"]],
    raw: true,
  });

  let totalCountVal;
  totalCountVal = await totalCount[0].count;

  const imgs = await Gallery.findAll({
    limit: 6,
    order: [["createdAt", "DESC"]],
  });
  return res
    .status(200)
    .send({ imgs, todayCountVal, yesterdayCountVal, totalCountVal });
};

exports.getNews = async (req, res) => {
  let finded;
  try {
    finded = await News.findAll({
      limit: 4,
      order: [["createdAt", "DESC"]],
    });

    // console.log("get ooootif", finded);
    return res.status(200).send(finded);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};
exports.getNotification = async (req, res) => {
  let finded;
  try {
    finded = await Notification.findOne({
      order: [["createdAt", "DESC"]],
    });

    // console.log("get ooootif", finded);
    return res.status(200).json({ finded });
  } catch (error) {
    console.log(error);
  }
};

exports.getTitles = async (req, res) => {
  const coinTitles = await Coin.findAll();
  const currenciesTitles = await Currency.findAll();
  res.status(201).send(currenciesTitles.concat(coinTitles));
};

exports.getArchive = async (req, res) => {
  let rate;
  let archive;
  // console.log("BOoooooooooooOODY", req.body);
  const startDate = new Date(req.body.start);
  const endDate = new Date(req.body.end);

  if (req.body.rate.includes("سکه")) {
    try {
      rate = await Coin.findOne({ where: { name: req.body.rate }, raw: true });
      // console.log("coin", rate);
      archive = await CoinArchive.findAll({
        where: {
          coinId: rate.id,
          updatedAt: {
            [Op.gte]: startDate,
            // [Op.lte]: endDate,
          },
        },
      })
        .then(async (res) => res)
        .then((archive) => {
          res.status(201).send(archive);
        });
    } catch (e) {
      console.log(e);
    }
  } else if (
    req.body.rate === "طلا" ||
    req.body.rate === "نفت" ||
    req.body.rate === "بورس"
  ) {
    try {
      rate = await Others.findOne({
        where: { name: req.body.rate },
        raw: true,
      });
      archive = await OthersArchive.findAll({
        where: {
          otherId: rate.id,
          updatedAt: {
            [Op.gte]: startDate,
            // [Op.lte]: endDate,
          },
        },
      })
        .then(async (res) => res)
        .then((archive) => {
          console.log("archive", archive);
          res.status(201).send(archive);
        });
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      rate = await Currency.findOne({
        where: { name: req.body.rate },
        raw: true,
      });
      // console.log(rate, req.body.rate);
      CurrencyArchive.findAll({
        where: {
          currencyId: rate.id,
          updatedAt: {
            [Op.gte]: startDate,
            [Op.lte]: endDate,
          },
        },
      })
        .then(async (res) => res)
        .then((archive) => {
          // console.log("archive", archive);
          res.status(201).send(archive);
        });
    } catch (e) {
      console.log(e);
    }
  }
};

exports.getallcoins = async (req, res) => {
  const AllCoins = await CoinPrice.findAll({
    include: { model: Coin },
    through: {
      attributes: ["name"],
    },
  });
  res.status(201).send(AllCoins);
};

exports.getUpdateAtCoin = async (req, res) => {
  const updatedAt = await CoinArchive.findOne({
    order: [["updatedAt", "DESC"]],
  });
  res.send(updatedAt);
};

exports.getUpdateAtCurrency = async (req, res) => {
  const updatedAt = await CurrencyArchive.findOne({
    order: [["updatedAt", "DESC"]],
  });
  res.send(updatedAt);
};

exports.getArchiveForCoinChart = async (req, res) => {
  const { id } = req.body;
  let fetchedArchive;
  try {
    fetchedArchive = await CoinArchive.findAll({
      where: {
        CoinId: id,
      },

      limit: 4,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ data: fetchedArchive });
  } catch (error) {
    console.log(error);
  }
};

exports.getArchiveForCurrencyChart = async (req, res) => {
  const { id } = req.body;
  let fetchedArchive;
  try {
    fetchedArchive = await CurrencyArchive.findAll({
      where: {
        CurrencyId: id,
      },
      limit: 4,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ data: fetchedArchive });
  } catch (error) {
    console.log(error);
  }
};

exports.getallcurrencies = async (req, res) => {
  const AllCurrensies = await CurrencyPrice.findAll({
    include: { model: Currency },
    through: {
      attributes: ["name", "symbol"],
    },
  });

  res.status(200).send({ AllCurrensies });
};

exports.getmsg = async (req, res) => {
  const msg = await Msg.findOne({ where: { id: 1 } });
  res.send(msg);
};

exports.getallothers = async (req, res) => {
  const AllCurrensies = await othersPrice.findAll({
    include: { model: Others },
    through: {
      attributes: ["name"],
    },
  });

  res.status(200).send(AllCurrensies);
};

exports.clock = (req, res) => {
  const date = new Date();
  res.send(date);
};
