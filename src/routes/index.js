import express from "express";
import computadores from "./computadorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("API Node.js"));

  app.use(express.json())
  app.use("/acme/computadores", computadores);
};

export default routes;
