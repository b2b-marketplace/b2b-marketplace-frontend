FROM node:20-alpine as build
WORKDIR /b2b_marketplace
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD cp -r build result_build
