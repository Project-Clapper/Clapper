FROM node:14-alpine

WORKDIR /usr/src/app

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]