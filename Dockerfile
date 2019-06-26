FROM node:10-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json package.json

RUN npm install

COPY  . .

EXPOSE 3003

CMD [ "node", "index.js" ]