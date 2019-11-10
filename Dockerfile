# The Docker file exists for quick building of docker images of app

FROM node:10.15

ARG PORT=8080
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
RUN npm config set -g production true
COPY package.json .
RUN npm install --ignore-scripts
RUN npm install -g sequelize-cli
COPY app ./app
COPY config ./config
COPY db ./db
COPY .env .
COPY .sequelizerc . 
COPY app.js .
EXPOSE ${PORT}
RUN sequelize db:migrate
RUN sequelize db:seed:all
ENTRYPOINT ["npm", "start"]
