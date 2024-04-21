import * as express from "express";
import { UsuarioController } from "./controller";
const Router = express.Router();


Router.get(
  "/user/all",
  UsuarioController.getAll
);


// main requests
Router.post(
  "/user/signup", 
  UsuarioController.signup
);


export { Router as usuarioRouter };