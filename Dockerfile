# The Docker file exists for quick building of docker images of app

FROM node:10.15

ARG PORT=8080
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
RUN npm config set -g production true
COPY package.json .
RUN npm install --ignore-scripts
COPY app ./app
COPY config ./config
COPY .env .
COPY app.js .
EXPOSE ${PORT}
ENTRYPOINT ["npm", "start"]
