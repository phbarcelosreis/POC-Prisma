import { Router } from "express";
import { productRoute } from "./productsRoute.js";
var routes = Router();
routes.use(productRoute);
export { routes };
