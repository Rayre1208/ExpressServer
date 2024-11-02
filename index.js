const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 引入 response.js 中的 JSON 資料
const responseData = require('./response.js');

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8084');

  // 獲取查詢參數，並轉換為小寫
  const query = req.query.query?.toLowerCase();

  // 如果沒有查詢參數，則返回所有產品
  const filteredProducts = query
    ? responseData.products.filter(product => {
        return product.randomtutors.name.full.toLowerCase().includes(query);
      })
    : responseData.products;

  res.json({ products: filteredProducts });
});



app.listen(port, () => {
  console.log(`Express Server started on port ${port}`);
});
//node index.js (npm i nodemon and express first)

//幾筆資料 資料體該如何形變