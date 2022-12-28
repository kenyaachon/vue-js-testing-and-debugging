FROM node:16-alpine3.12

WORKDIR /app

COPY package*.json ./
COPY . .
EXPOSE 8080
