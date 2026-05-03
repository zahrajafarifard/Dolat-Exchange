const Coin = require("./models/COIN/coin");
const Currency = require("./models/CURRENCY/currency");
const CoinPrice = require("./models/COIN/coinPrice");
const CurrencyPrice = require("./models/CURRENCY/currencyPrice");
const View = require("./models/USER/view");

module.exports.initialView = async () => {
  try {
    await View.create({});
  } catch {}
};

module.exports.initalCurrency = async () => {
  try {
    await Currency.create({
      name: "دلارآمریکا",
      symbol: "USD",
    });
    await Currency.create({
      name: "یورو",
      symbol: "EUR",
    });
    await Currency.create({
      name: "پوند انگلیس",
      symbol: "GBP",
    });
    await Currency.create({
      name: "دلار کانادا",
      symbol: "CAD",
    });
    await Currency.create({
      name: "درهم امارات",
      symbol: "AED",
    });
    await Currency.create({
      name: "دلار استرالیا",
      symbol: "AUS",
    });
    await Currency.create({
      name: "فرانک سوییس",
      symbol: "CHF",
    });
    await Currency.create({
      name: "کرون سوئد",
      symbol: "SEK",
    });
    await Currency.create({
      name: "کرون نروژ",
      symbol: "NOK",
    });
    await Currency.create({
      name: "کرون دانمارک",
      symbol: "DKK",
    });
    await Currency.create({
      name: "لیر ترکیه",
      symbol: "TRY",
    });
    await Currency.create({
      name: "یوان چین",
      symbol: "CNY",
    });

    await Currency.create({
      name: "رینگیت مالزی",
      symbol: "MYR",
    });

    await Currency.create({
      name: "بات تایلند",
      symbol: "THB",
    });
    await Currency.create({
      name: "روبل روسیه",
      symbol: "RUB",
    });

    await Currency.create({
      name: "درام ارمنستان",
      symbol: "AMD",
    });

    await Currency.create({
      name: "منات آذربایجان",
      symbol: "AZN",
    });
    await Currency.create({
      name: "دینار عراق",
      symbol: "IQD",
    });
  } catch (err) {
    //  console.log(err);
  }
};

module.exports.initialCoin = async () => {
  try {
    await Coin.create({ name: "تصویر امامی" });
    await Coin.create({ name: "تمام قدیم" });
    await Coin.create({ name: "نیم بهار" });
    await Coin.create({ name: "ربع بهار" });
    await Coin.create({ name: "یک گرمی" });
    await Coin.create({ name: "پارسیان" });
  } catch (err) {
    //  console.log(err);
  }
};

module.exports.initialCoinPrice = async () => {
  try {
    await CoinPrice.create({ CoinId: 1 });
    await CoinPrice.create({ CoinId: 2 });
    await CoinPrice.create({ CoinId: 3 });
    await CoinPrice.create({ CoinId: 4 });
    await CoinPrice.create({ CoinId: 5 });
    await CoinPrice.create({ CoinId: 6 });
  } catch (err) {
    //  console.log(err);
  }
};

module.exports.initialCurrencyPrice = async () => {
  try {
    await CurrencyPrice.create({
      CurrencyId: 1,
    });
    await CurrencyPrice.create({
      CurrencyId: 2,
    });
    await CurrencyPrice.create({
      CurrencyId: 3,
    });
    await CurrencyPrice.create({
      CurrencyId: 4,
    });
    await CurrencyPrice.create({
      CurrencyId: 5,
    });
    await CurrencyPrice.create({
      CurrencyId: 6,
    });
    await CurrencyPrice.create({
      CurrencyId: 7,
    });
    await CurrencyPrice.create({
      CurrencyId: 8,
    });
    await CurrencyPrice.create({
      CurrencyId: 9,
    });
    await CurrencyPrice.create({
      CurrencyId: 10,
    });
    await CurrencyPrice.create({
      CurrencyId: 11,
    });
    await CurrencyPrice.create({
      CurrencyId: 12,
    });
    await CurrencyPrice.create({
      CurrencyId: 13,
    });
    await CurrencyPrice.create({
      CurrencyId: 14,
    });
    await CurrencyPrice.create({
      CurrencyId: 15,
    });
    await CurrencyPrice.create({
      CurrencyId: 16,
    });
    await CurrencyPrice.create({
      CurrencyId: 17,
    });
    await CurrencyPrice.create({
      CurrencyId: 18,
    });
  } catch (err) {
    //console.log(err);
  }
};
