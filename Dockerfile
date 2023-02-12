FROM node:12

WORKDIR /tasks/

COPY package*.json ./

RUN npm install

COPY . .