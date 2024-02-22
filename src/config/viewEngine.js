import express from "express";

const configViewEngine = (app) => {
  app.use(express.static(".src/public/"));
  app.set("view engine", "ejs");
  app.use("views", "./src/views");
}

module.exports = configViewEngine;