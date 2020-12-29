FROM node:alpine
ADD . /opt/app
WORKDIR /opt/app
RUN yarn install
RUN yarn build
CMD ["yarn","start"]