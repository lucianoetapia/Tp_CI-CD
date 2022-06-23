FROM node:carbon-alpine 
WORKDIR /my_app
COPY app.js /my_app
COPY package.json /my_app
RUN npm install
EXPOSE 3000
CMD node app.js