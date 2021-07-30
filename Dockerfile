FROM node:10-alpine
RUN mkdir /app
RUN npm install express
WORKDIR /app
RUN mkdir /app/build
#COPY /dist /app/build
COPY webserver.js /app
EXPOSE 3001
CMD [ "node", "webserver.js" ]