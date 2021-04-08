const express = require("express");
const durak = express.Router();
const soap = require("soap");
const url =
  "https://api.ibb.gov.tr/iett/UlasimAnaVeri/HatDurakGuzergah.asmx?wsdl";

durak.get("/api/durak", (req, res) => {
  let args = { DurakKodu: "" };
  soap.createClient(url, (err, client) => {
    client.GetDurak_json(args, (err, result) => {
      res.json(JSON.parse(result.GetDurak_jsonResult));
    });
  });
});

module.exports = durak;
