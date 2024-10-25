import express from "express";
import serverless from "serverless-http";
import { planetsRouter } from "./src/routes/planets";
import { productsRouter } from "./src/routes/products";

const app = express();
app.use(express.json());
app.use("/db/products", productsRouter);
app.use("/integration/star-wars", planetsRouter);

export const handler = serverless(app);
