FROM node:latest
RUN apt-get update \
    && apt-get install -y git
    RUN mkdir /usr/src/saar \
    && cd /usr/src/saar \
    && git clone https://github.com/martinpanin/saar-shop.git
WORKDIR /usr/src/saar/saar-shop

COPY package*.json ./
RUN npm install 
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]