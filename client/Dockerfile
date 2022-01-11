FROM node:current-alpine3.14
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]