import { Router } from "express";
import { PlanetsController } from "../controllers/planets";

export const planetsRouter = Router();

planetsRouter.get("/planets", PlanetsController.getPlanets);
