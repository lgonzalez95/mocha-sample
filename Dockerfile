FROM node:12.22.5

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm" ,"run", "test" ]