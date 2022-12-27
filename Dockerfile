FROM node:12-alpine3.15

WORKDIR /app

COPY package*.json ./
COPY . .
EXPOSE 8080
