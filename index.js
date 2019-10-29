require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./server/config");
const {
  globalMiddleware
  //connect
} = require("./server/middleware");
// const authRouter = require("./api/auth/auth.router");
const fontsRouter = require("./server/api/fonts/fonts.router");

// Initializes express server
const app = express();

// Global middleware
globalMiddleware(app);

// app.use("/auth", authRouter);
app.use("/fonts", fontsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

const start = async () => {
  try {
    // await connect(app);
    app.listen(config.port, () => {
      console.log(`Rest api on http://localhost:${config.port}/`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
