const { config } = require("dotenv");
const withImages = require("next-images");

if (!process.env.IS_DOCKER) {
  config({ path: "../../.env" });
}

module.exports = withImages({
  serverRuntimeConfig: {
    ...process.env,
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    SITE_TITLE: "Jarman Building Services Ltd.",
  },
});
