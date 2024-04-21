import * as express from "express";
import { IngressoController } from "./controller";
const Router = express.Router();


Router.get(
  "/get/all",
  IngressoController.getAll
);


// main requests
Router.post(
  "/create", 
  IngressoController.create
);


export { Router as ingressoRouter };