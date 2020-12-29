const withImages = require("next-images");

module.exports = withImages({
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    SITE_TITLE: "Jarman Building Services Ltd.",
  },
});
