# Specify base image

FROM node:14-alpine

WORKDIR /usr/app

COPY ./package.json ./
#Install some dependencies
RUN npm install
COPY ./ ./

#Default command

CMD ["npm", "start"]
