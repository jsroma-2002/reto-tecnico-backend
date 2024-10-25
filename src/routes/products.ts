import { Router } from "express";
import { ProductsController } from "../controllers/products";

export const productsRouter = Router();

productsRouter.post("/", ProductsController.createProduct);
productsRouter.get("/:id", ProductsController.getProductById);
