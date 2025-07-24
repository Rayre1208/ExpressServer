# 使用官方 Node.js 映像檔
FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製專案所有檔案
COPY . .

# 開放 port
EXPOSE 8080

# 啟動 Express 伺服器
CMD ["node", "index.js"]