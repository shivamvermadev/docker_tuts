#section 1
FROM node:16-alpine as builder

WORKDIR '/usr/app'

COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

#section 2 - only one section can have from image although there can be multiple sections
FROM nginx
COPY --from=builder /usr/app/build /usr/share/nginx/html
