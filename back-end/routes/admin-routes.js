const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin-controller");
const fileUpload = require("../fileUpload");
const fileUploadNews = require("../fileUpload-NewsPhoto");

router.post("/updateCurrency", adminController.updateCurrency);
router.post("/updateCoin", adminController.updateCoin);
router.post("/setNotification", adminController.setNotification);
router.post("/deleteImage", adminController.deleteImage);
router.get("/getImageName", adminController.getImageName);

router.post("/registerConfig", adminController.registerConfig);
router.get("/getConfig", adminController.getConfig);

router.post("/uploadImage", fileUpload, adminController.uploadImage);
router.post("/registerNews", fileUploadNews, adminController.registerNews);



module.exports = router;
