const express = require("express");
const app = express();
const port = 5000;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
