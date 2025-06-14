FROM node:18

WORKDIR /user-logger

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6001

CMD ["npm", "run", "start"]
