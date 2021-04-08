const express = require("express");
const filo = express.Router();
const soap = require("soap");
const url = "https://api.ibb.gov.tr/iett/FiloDurum/SeferGerceklesme.asmx?wsdl";

filo.get("/api/filo", (req, res) => {
  let args = {
    Operator: "",
    Garaj: "",
    KapiNo: "",
    Saat: "",
    Boylam: "",
    Enlem: "",
    Hiz: "",
    Plaka: "",
  };
  soap.createClient(url, (err, client) => {
    client.GetFiloAracKonum_json(args, (err, result) => {
      res.json(JSON.parse(result.GetFiloAracKonum_jsonResult));
    });
  });
});

module.exports = filo;
