const express = require("express");
const app = express();

const durakRouter = require("./routes/durak");
const filoRouter = require("./routes/filo");
const duyurularRouter = require("./routes/duyurular");
const filoHatRouter = require("./routes/filoHat");
const garajRouter = require("./routes/garaj");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", durakRouter);
app.use("/", filoRouter);
app.use("/", duyurularRouter);
app.use("/", filoHatRouter);
app.use("/", garajRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Hello World!`);
  // console.log(app.get("/api/durak"));
});

module.exports = app;
