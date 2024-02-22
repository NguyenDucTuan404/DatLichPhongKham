import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage());
  router.get('/teanne', (req, res) => {
    return res.send("Welcome teanne")
  });

  return app.use("/", router);
}

module.exports = initWebRoutes;