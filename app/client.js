const contentful = require("contentful");

const client = contentful.createClient({
  space: "0wjjkw1ybx3u",
  environment: "master", // defaults to 'master' if not set
  accessToken: "VjYxZ-G-khlJPnomq1ghPit3xUNyKM0jESiL8k3fyG4",
});

export default client;