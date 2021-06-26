const express = require('express')
const next = require('next')
const https = require("https");
const {createProxyMiddleware} = require("http-proxy-middleware")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const target = process.env.BFF_URL || 'http://localhost:3001'
const app = next({dev})
const handle = app.getRequestHandler()

const getSource = url => {
  if (url.startsWith("/api/skr")) return "https://sarkariresults.info"
  if (url.startsWith("/api/rjr")) return "https://rojgarresult.com"
  if (url.startsWith("/api/jsk")) return "https://jobsarkari.com"
  return ""
}

app.prepare().then(() => {
  const server = express()

  server.use(["/api/skr", "/api/jsk", "/api/rjr"], (req, res) => {
    https.get(`${getSource(req.originalUrl)}${req.originalUrl.slice(8)}`, (response) => {
      const data = []
      response.on("data", chunk => data.push(chunk))
      response.on("end", () => {
        Object.keys(response.headers).forEach(header => {
          res.setHeader(header, (response.headers)[header]);
        })
        res.end(Buffer.concat(data));
      })
    })
  });

  server.use('/api', createProxyMiddleware({target, changeOrigin: true, pathRewrite: {'^/api': '/api'},}));

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => console.log(`Server is listening on ${port}`))
})
