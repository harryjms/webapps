FROM node:latest
ADD . /app
ENV NEXT_TELEMETRY_DISABLED=1
ARG GOOGLE_ANALYTICS_ID
WORKDIR /app
RUN yarn install
RUN yarn build
CMD ["yarn","start"]