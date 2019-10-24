const { Router } = require("express");
const { getAll, getPage, filterByName } = require("./fonts.controller");

const fontsRouter = Router();

// GET api/v1/fonts
fontsRouter.route("/").get(getPage);
fontsRouter.route("/init").get(getAll);
fontsRouter.route("/search").get(filterByName);
module.exports = fontsRouter;
