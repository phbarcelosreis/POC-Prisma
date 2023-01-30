import { Router } from "express";
import { postOrder } from "../controllers/orders.controller.js";
import { checkOrder } from "../middlewares/orders.middleware.js";

const ordersRoute = Router();

ordersRoute.post("/orders", checkOrder, postOrder);
ordersRoute.get("/orders");


export {ordersRoute}