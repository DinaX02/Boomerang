const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function addProxyMiddleware(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://boomerang-api-nu.vercel.app",
      changeOrigin: true,
    })
  );
};
