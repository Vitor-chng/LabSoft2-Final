import * as express from "express";
import { UsuarioController } from "./controller";
const Router = express.Router();


Router.get(
  "/get/all",
  UsuarioController.getAll
);


// main requests
Router.post(
  "/new", 
  UsuarioController.new
);


export { Router as usuarioRouter };