import { Router } from "express";
import { productDelete, filterProduct, postProduct, updateProducts } from "../controllers/products.controller.js";
import { checkDel, checkProduct, checkUpdate, verifyFilterProduct } from "../middlewares/product.middleware.js";
var productRoute = Router();
productRoute.post("/produtos", checkProduct, postProduct);
productRoute.get("/produtos", verifyFilterProduct, filterProduct);
productRoute.put("/produtos/:id", checkUpdate, updateProducts);
productRoute["delete"]("/produtos", checkDel, productDelete);
export { productRoute };
