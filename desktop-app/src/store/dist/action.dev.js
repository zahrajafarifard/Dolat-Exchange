"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteStatus = exports.setCurrenciesAction = exports.setCoinsAction = void 0;

var setCoinsAction = function setCoinsAction(val) {
  return {
    type: "SET_COINS",
    coins: val
  };
};

exports.setCoinsAction = setCoinsAction;

var setCurrenciesAction = function setCurrenciesAction(val) {
  return {
    type: "SET_CURRS",
    currencies: val
  };
};

exports.setCurrenciesAction = setCurrenciesAction;

var deleteStatus = function deleteStatus() {
  return {
    type: "DELETE_STATUS"
  };
};

exports.deleteStatus = deleteStatus;