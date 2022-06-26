FROM node:18-alpine
COPY . /var/www/app
WORKDIR /var/www/app
CMD mkdir -p /var/www/app && \
    npm install && \
    node index.js