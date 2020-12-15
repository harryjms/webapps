FROM node:latest
ADD . /app
ARG GOOGLE_ANALYTICS_ID
WORKDIR /app
RUN yarn install
RUN yarn build
CMD ["yarn","start"]