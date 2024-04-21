import * as express from "express";
import { IngressoController } from "./controller";
const Router = express.Router();


Router.get(
  "/user/all",
  IngressoController.getAll
);


// main requests
Router.post(
  "/user/signup", 
  IngressoController.signup
);


export { Router as ingressoRouter };