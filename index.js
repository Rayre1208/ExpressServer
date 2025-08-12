const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 引入 response.js 中的 JSON 資料
const responseproducts = require('./mockData/products');

app.get('/products', (req, res) => {
  // 可考慮不使用 或是 使用 CORS middleware 套件 搭配環境變數
  //res.header('Access-Control-Allow-Origin', 'http://localhost:8084');

  // 獲取查詢參數，並轉換為小寫
  const query = req.query.query?.toLowerCase();

  // 如果沒有查詢參數，則返回所有產品
  const filteredProducts = query
    ? responseproducts.products.filter(product => {
        return product.randomtutors.name.full.toLowerCase().includes(query);
      })
    : responseproducts.products;

  res.json({ products: filteredProducts });
});

app.get('/tests', (req, res) => {
  // 可考慮不使用 或是 使用 CORS middleware 套件 搭配環境變數
  res.header('Access-Control-Allow-Origin', 'http://localhost:8084');
  res.json({ products: "test7" });
});

app.listen(port, () => {
  console.log(`Express Server started on port ${port}`);
});
//node index.js (npm i nodemon and express first)

//幾筆資料 資料體該如何形變