const express = require("express");
const logger = require("morgan");
const app = express();

app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res) => res.json({ welcome: "hello" }));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
