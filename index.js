const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 引入 response.js 中的 JSON 資料
const responseData = require('./response.js');

app.get('/', (req, res) => {
  res.json(responseData); // 將 responseData 作為 JSON 格式回應
});



app.listen(port, () => {
  console.log(`Express Server started on port ${port}`);
});
//node index.js (npm i nodemon and express first)
