const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client-controller");

router.get("/rules/downloadImportsPDF", clientController.downloadImportsPDF);
router.get(
  "/rules/downloadLawAgainstMoneyPDF",
  clientController.downloadLawAgainstMoneyPDF
);
router.get(
  "/rules/downloadMonetaryRulesPDF",
  clientController.downloadMonetaryRulesPDF
);

router.get(
  "/forms/downloadCommitmentLetter",
  clientController.commitmentLetter
);
router.get("/forms/downloadRealClientForm", clientController.realClientForm);
router.get("/forms/downloadLegalClientForm", clientController.legalClientForm);

router.get("/getImages", clientController.getImages);

router.get("/getallcoins", clientController.getallcoins);
router.get("/getallcurrencies", clientController.getallcurrencies);

router.post(
  "/getArchiveForCurrencyChart",
  clientController.getArchiveForCurrencyChart
);
router.post("/getArchiveForCoinChart", clientController.getArchiveForCoinChart);
router.get("/getUpdateAtCurrency", clientController.getUpdateAtCurrency);
router.get("/getUpdateAtCoin", clientController.getUpdateAtCoin);
router.get("/getNotification", clientController.getNotification);
router.get("/getNews", clientController.getNews);

router.get("/getallothers", clientController.getallothers);
router.post("/getTitles", clientController.getTitles);
router.post("/getArchive", clientController.getArchive);
router.post("/getmsg", clientController.getmsg);
router.get("/clock", clientController.clock);

module.exports = router;
