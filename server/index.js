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
  const movie = stavby.find(movie => movie.id === id);
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send("Stavba nebyla nalezena.");
  }
});

/* Request: použití metody POST, URL adresy /api/stavby
   Response: výpis nového filmu   */
app.post("/api/stavby", (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    const movie = {
      id: stavby.length !== 0 ? stavby[stavby.length - 1].id + 1 : 1,
      name: req.body.name,
      year: req.body.year,
      state: req.body.state,
      content: req.body.content,
    };
    stavby.push(movie);
    res.send(movie);
    writeJSON(stavby, "stavby.json");
  }
});

app.put("/api/stavby/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = stavby.find(movie => movie.id === id);
  if (!movie) {
    res.status(404).send("Film nebyl nalezen.");
    return;
  }
  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    movie.name = req.body.name;
    movie.year = req.body.year;
    movie.state = req.body.state;
    movie.content = req.body.content;
    res.send(movie);
    writeJSON(stavby, "stavby.json");
  }
});

app.delete("/api/stavby/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = stavby.find(movie => movie.id === id);
  if (!movie) {
    res.status(404).send("Film nebyl nalezen.");
  } else {
    const index = stavby.indexOf(movie);
    stavby.splice(index, 1);
    res.send(movie);
    writeJSON(stavby, "stavby.json");
  }
});

app.listen(3000, () => console.log("Listening on port 3000..."));

function validateMovie(movie) {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    year: Joi.number(),
    state: Joi.string(),
    content: Joi.string()
  };
  return Joi.validate(movie, schema);
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