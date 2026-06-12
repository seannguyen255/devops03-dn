FROM node:24

WORKDIR /node_backend

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . . 

EXPOSE 8088

# node server.js 
CMD ["node","server.js"]
# CMD ["yarn","start"]

# docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin123 -v mongodb_data:/data/db --restart unless-stopped mongo
# docker build . -t img-node-mongodb
# docker run -d -p 8088:8088 --name cons-node-mongo --network demo_network img-node-mongodb