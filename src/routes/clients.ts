import { Router } from "express";
import { postClient } from "../controllers/clients.controller.js";
import { checkClient } from "../middlewares/clients.middleware.js";

const clientsRoute = Router();

clientsRoute.post("/clients", checkClient, postClient);

export {clientsRoute}