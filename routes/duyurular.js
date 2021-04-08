const express = require("express");
const duyurular = express.Router();
const soap = require("soap");
const url = "https://api.ibb.gov.tr/iett/UlasimDinamikVeri/Duyurular.asmx?wsdl";

duyurular.get("/api/duyurular", (req, res) => {
  let args = { Hat: "", Tip: "", GuncellemeSaati: "", Mesaj: "" };
  soap.createClient(url, (err, client) => {
    client.GetDuyurular_json(args, (err, result) => {
      res.json(JSON.parse(result.GetDuyurular_jsonResult));
    });
  });
});

module.exports = duyurular;
