import { Router } from "express";
import { clientsRoute } from "./clients.js";
import { ordersRoute } from "./orders.js";
import { productRoute } from "./productsRoute.js";

const routes = Router();

routes.use(productRoute);
routes.use(ordersRoute);
routes.use(clientsRoute)

export {routes}