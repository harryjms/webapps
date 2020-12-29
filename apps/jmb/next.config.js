const withImages = require("next-images");

module.exports = withImages({
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
});
