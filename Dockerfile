FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm run build

CMD ["npm", "start"]
