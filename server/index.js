const fs = require("fs");
const Joi = require("joi");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const stavby = require("./stavby.json");

/* Request: použití metody GET, URL adresy /:
   Response: HTML stránka  */
app.get("/", (req, res) => {
  res.send("<h1>Úvodní stránka - REST API</h1>");
});

/* Request: použití metody GET, URL adresy /api/stavby:
   Response: výpis všech filmů ve formátu JSON  */
app.get("/api/stavby", (req, res) => {
  res.send(stavby);
});

/* Request: použití metody GET, URL adresy /api/stavby, parametr id
   Response: výpis konkrétního filmu podle zadaného id ve formátu JSON  */
app.get("/api/stavby/:id", (req, res) => {
  const id = Number(req.params.id);
  const stavba = stavby.find(stavba => stavba.id === id);
  if (stavba) {
    res.send(stavba);
  } else {
    res.status(404).send("Stavba nebyla nalezena.");
  }
});

/* Request: použití metody POST, URL adresy /api/stavby
   Response: výpis nového filmu   */
app.post("/api/stavby", (req, res) => {
  const { error } = validatestavba(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    const stavba = {
      id: stavby.length !== 0 ? stavby[stavby.length - 1].id + 1 : 1,
      name: req.body.name,
      year: req.body.year,
      city: req.body.city,
      state: req.body.state,
      height: req.body.height,
    };
    stavby.push(stavba);
    res.send(stavba);
    writeJSON(stavby, "stavby.json");
  }
});

app.put("/api/stavby/:id", (req, res) => {
  const id = Number(req.params.id);
  const stavba = stavby.find(stavba => stavba.id === id);
  if (!stavba) {
    res.status(404).send("Film nebyl nalezen.");
    return;
  }
  const { error } = validatestavba(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    stavba.name = req.body.name;
    stavba.year = req.body.year;
    stavba.city = req.body.city;
    stavba.state = req.body.state;
    stavba.height = req.body.height;
    res.send(stavba);
    writeJSON(stavby, "stavby.json");
  }
});

app.delete("/api/stavby/:id", (req, res) => {
  const id = Number(req.params.id);
  const stavba = stavby.find(stavba => stavba.id === id);
  if (!stavba) {
    res.status(404).send("Film nebyl nalezen.");
  } else {
    const index = stavby.indexOf(stavba);
    stavby.splice(index, 1);
    res.send(stavba);
    writeJSON(stavby, "stavby.json");
  }
});

app.listen(3000, () => console.log("Listening on port 3000..."));

function validatestavba(stavba) {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    year: Joi.number(),
    city: Joi.string(),
    state: Joi.string(),
    height: Joi.number()
  };
  return Joi.validate(stavba, schema);
}

function writeJSON(jsonData, pathToFile) {
  let data = JSON.stringify(jsonData, null, 2);
  fs.writeFile(pathToFile, data, err => {
    if (err) {
      throw err;
    } else {
      console.log("Data written to file");
    }
  });
}