FROM node:24

WORKDIR /node_backend

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . . 

RUN yarn run build

EXPOSE 3000

CMD ["yarn","start"]