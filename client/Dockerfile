FROM node:latest
WORKDIR /client
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm i --save logrocket
COPY . .
EXPOSE 3000
CMD ["npm", "start"]