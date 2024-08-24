const { default: axios } = require("axios");
const cheerio = require("cheerio");
const QS = require("qs");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.json({
    message: "test work A ver!!",
  });
});


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Express Server started on port ${port}`);
});
