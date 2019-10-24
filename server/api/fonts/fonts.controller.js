const axios = require("axios");
const config = require("../../config");

let fonts = [];

const apiCall = async () => {
  const res = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${config.secrets.gFontsKey}&sort=popularity`
  );
  fonts = res.data.items;
};

const getAll = async (req, res, next) => {
  apiCall();

  // fonts = fontsList.data.items;
  res.status(200).json({ msg: "loaded" });
};

const getPage = async (req, res) => {
  let { offset } = req.query;

  console.log(offset);

  if (fonts.length === 0) {
    await apiCall();
  }

  let arr = [];
  for (let i = offset - 12; i < offset; i++) {
    arr.push(fonts[i]);
  }

  res.status(200).json(arr);
};

const filterByName = (req, res) => {
  let { name } = req.query;

  let resArr = fonts.filter(font =>
    font.family.toLowerCase().includes(name.toLowerCase())
  );
  console.log(name, resArr);
  res.status(200).json(resArr);
};

module.exports = { getAll, getPage, filterByName };
