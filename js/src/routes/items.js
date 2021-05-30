const route = require("express").Router();

const { getItems } = require("../controllers/items");

route.get("/", getItems);

module.exports = route;
