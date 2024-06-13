import express from "express";
import cors from "cors";
import fs from "node:fs";

const app = express();
const port = 3000;

app.use(cors());


app.get("/shoes-dr-martins", (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile("./data/shoes-drmartins.json", function (err, data) {
    res.send(data);
  });
});

app.get("/shoes-nike", (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile("./data/shoes-nike.json", function (err, data) {
    res.send(data);
  });
});

app.get("/shoes-puma", (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile("./data/shoes-puma.json", function (err, data) {
    res.send(data);
  });
});

app.get("/phones", (req, res) => {
  res.send("Phones!");
});

app.get("/games-activision", (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile("./data/games-activision.json", function (err, data){
    res.send(data);
  });
});

app.get("/games-rockstar", (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile("./data/games-rockstar.json", function (err, data){
    res.send(data);
  });
});

app.get("/games-ubisoft", (req, res) => {
  res.setHeader("Content-type", "application/json;charset=UTF-8");
  fs.readFile("./data/games-ubisoft.json", function (err, data){
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



