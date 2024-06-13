import express from "express";
import cors from "cors";
import fs from "node:fs";

const app = express();
const port = 3000;

app.use(cors());

const express = require('express');
const { exec } = require('child_process');

app.get('/start-server', (req, res) => {
    exec('node path/to/your/server.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting server: ${error}`);
            res.status(500).send('Error starting server');
            return;
        }
        console.log(`Server started: ${stdout}`);
        res.send('Server started successfully');
    });
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});


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



