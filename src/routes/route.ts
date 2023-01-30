import { Router } from "express";
import { productRoute } from "./productsRoute.js";

const routes = Router();

routes.use(productRoute)

export {routes}