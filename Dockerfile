FROM node:15.4.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "/usr/src/app/"]
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "serve"]
