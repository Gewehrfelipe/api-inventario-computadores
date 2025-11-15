import express from "express";
import ComputadoresController from "../controllers/computadoresController.js";

const routes = express.Router();

routes.get("/", ComputadoresController.listarComputadores);
routes.get("/:id", ComputadoresController.listarComputadorPorId);
routes.post("/", ComputadoresController.cadastrarComputador);
routes.put("/:id", ComputadoresController.atualizarComputador);
routes.delete("/:id", ComputadoresController.excluirComputador);

export default routes;