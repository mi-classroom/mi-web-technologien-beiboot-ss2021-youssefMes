FROM mhart/alpine-node:15.0.1

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
