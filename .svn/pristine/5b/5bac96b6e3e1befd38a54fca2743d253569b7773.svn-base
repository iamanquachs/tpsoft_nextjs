   FROM node:alpine
   # Cài đặt các dependencies cần thiết
   WORKDIR /app
   # Copy source code và cài đặt dependencies
   COPY package*.json ./
   RUN npm install
   # Copy toàn bộ mã nguồn
   COPY . .
   # Build ứng dụng Next.js
   RUN npm run build
   # Chạy ứng dụng
   CMD ["npm", "start"]