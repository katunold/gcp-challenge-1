FROM node:latest

WORKDIR '/gcp-challenge-1'

COPY . /gcp-challenge-1
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start"]
