const express = require("express");
const garaj = express.Router();
const soap = require("soap");
const url =
  "https://api.ibb.gov.tr/iett/UlasimAnaVeri/HatDurakGuzergah.asmx?wsdl";

garaj.get("/api/garaj", (req, res) => {
  let args = {};
  soap.createClient(url, (err, client) => {
    client.GetGaraj_json(args, (err, result) => {
      res.json(JSON.parse(result.GetGaraj_jsonResult));
    });
  });
});

module.exports = garaj;
