FROM node:16-alpine

COPY . /home/node/archive/portfolio

WORKDIR /home/node/archive/portfolio

RUN npm install

EXPOSE 3000

FROM nginx:1.23.1-alpine

COPY ./public /usr/share/nginx/html
