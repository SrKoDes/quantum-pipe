FROM node:latest
WORKDIR /client
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm i --save logrocket
COPY . .
CMD ["npm", "start"]